import {
  Component,
  OnInit,
  ViewEncapsulation,
  ElementRef,
  ViewChild,
  Input,
  EventEmitter,
  Output,
  OnDestroy
} from '@angular/core';
import Cropper from 'cropperjs';

export interface ImageCropperSetting {
  width: number;
  height: number;
}

export interface ImageCropperResult {
  imageData: Cropper.ImageData;
  cropData: Cropper.CropBoxData;
  blob?: Blob;
  dataUrl?: string;
}

@Component({
  selector: 'cropperjs-wrapper',
  templateUrl: './cropperjs-wrapper.component.html',
  styleUrls: ['./cropperjs-wrapper.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CropperjsWrapperComponent implements OnInit, OnDestroy {

  @ViewChild('image') image: ElementRef;

  @Input() imageUrl: any;
  @Input() settings: ImageCropperSetting;
  @Input() cropbox: Cropper.CropBoxData;
  @Input() loadImageErrorText: string;
  @Input() cropperOptions: any = {
    aspectRatio: 16 / 9,
    preview: '.img-preview',
    ready: function (e) {
      console.log(e.type);
    },
    cropstart: function (e) {
      console.log(e.type, e.detail.action);
    },
    cropmove: function (e) {
      console.log(e.type, e.detail.action);
    },
    cropend: function (e) {
      console.log(e.type, e.detail.action);
    },
    crop: function (e) {
      console.log(e.type);
    },
    zoom: function (e) {
      console.log(e.type, e.detail.ratio);
    }
  };

  @Output() export = new EventEmitter<ImageCropperResult>();
  @Output() ready = new EventEmitter();

  public isLoading: boolean = true;
  public cropper: Cropper;
  public imageElement: HTMLImageElement;
  public loadError: any;

  constructor() { }

  ngOnInit() { }

  ngOnDestroy() {
    if (this.cropper) {
      this.cropper.destroy();
      this.cropper = null;
    }
  }

  imageLoaded(ev: Event) {
    // Unset load error state
    this.loadError = false;

    // Setup image element
    const image = ev.target as HTMLImageElement;
    this.imageElement = image;
    // Add crossOrigin?
    if (this.cropperOptions.checkCrossOrigin) image.crossOrigin = 'anonymous';

    // Image on ready event
    image.addEventListener('ready', () => {
      // Emit ready
      this.ready.emit(true);

      // Unset loading state
      this.isLoading = false;

      // Validate cropbox existance
      if (this.cropbox) {

        // Set cropbox data
        this.cropper.setCropBoxData(this.cropbox);
      }
    });

    // Setup aspect ratio according to settings
    let aspectRatio = NaN;
    if (this.settings) {
      const { width, height } = this.settings;
      aspectRatio = width / height;
    }

    // Set crop options
    // extend default with custom config
    this.cropperOptions = Object.assign({
      aspectRatio,
      movable: false,
      scalable: false,
      zoomable: false,
      viewMode: 1,
      checkCrossOrigin: true
    }, this.cropperOptions);

    // Set cropperjs
    if (this.cropper) {
      this.cropper.destroy();
      this.cropper = undefined;
    }
    this.cropper = new Cropper(image, this.cropperOptions);
  }

  imageLoadError(event: any) {
    // Set load error state
    this.loadError = true;
    // Unset loading state
    this.isLoading = false;
  }


  // imageChange(event: any) {
  //   if (/^image\/\w+/.test(event.type)) {
  //     // uploadedImageType = file.type;
  //     // uploadedImageName = file.name;

  //     // if (uploadedImageURL) {
  //     //   URL.revokeObjectURL(uploadedImageURL);
  //     // }

  //     image.src = uploadedImageURL = URL.createObjectURL(file);

  //     if (cropper) {
  //       cropper.destroy();
  //     }

  //     cropper = new Cropper(image, options);
  //     inputImage.value = null;
  //   }
  // };

  exportCanvas(base64?: any) {
    // Get and set image, crop and canvas data
    const imageData = this.cropper.getImageData();
    const cropData = this.cropper.getCropBoxData();
    const canvas = this.cropper.getCroppedCanvas();
    const data = { imageData, cropData };

    // Create promise to resolve canvas data
    const promise = new Promise(resolve => {

      // Validate base64
      if (base64) {

        // Resolve promise with dataUrl
        return resolve({
          dataUrl: canvas.toDataURL('image/png')
        });
      }
      canvas.toBlob(blob => resolve({ blob }));
    });

    // Emit export data when promise is ready
    promise.then(res => {
      this.export.emit(Object.assign(data, res));
    });
  }
}

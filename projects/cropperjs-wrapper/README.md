# cropperjs-wrapper

[CropperJS](https://fengyuanchen.github.io/cropperjs/) integration for Angular 7+

## How to use

1- Install the library:

```bash
$ npm install cropperjs-wrapper --save
```

2- Import and load `CropperjsWrapperModule` in the module you want to use, for example `AppModule`:

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

//
// Import cropperjs-wrapper
import { CropperjsWrapperModule } from 'cropperjs-wrapper';

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,

        //
        // Load cropperjs-wrapper
        CropperjsWrapperModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
```

3- Use the component in your template like this:

```html
<!-- You can now use cropper-wrapper component in app.component.html -->
<cropper-wrapper [cropperOptions]="config" [imageUrl]="imageUrl"></cropper-wrapper>
```

**Using CropperJS methods:**

Use @ViewChild in your component to get the element:

_In your app.component.html_

```html
<cropper-wrapper #cropperWrapper ..></cropper-wrapper>
```

_And in your app.component.ts_

```js

//
// Import CropperWrapperComponent
import { CropperWrapperComponent } from 'cropper-wrapper';

//
// Get with @ViewChild
@ViewChild('cropperWrapper') public cropperWrapper: CropperWrapperComponent;
```

Then just call the CropperJS method you want:

_anywhere in your app.component.ts_

```js
//
// Lets try to zoom
this.cropperWrapper.cropper.zoom(0.1);
```

# Development

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.2.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## License

MIT © [Ravi Jain](mailto:ravi9115ravi@gmail.com)

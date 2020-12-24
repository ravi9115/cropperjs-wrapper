import { NgModule } from '@angular/core';
import { CropperjsWrapperComponent } from './cropperjs/cropperjs-wrapper.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [CropperjsWrapperComponent],
  imports: [CommonModule],
  exports: [CropperjsWrapperComponent]
})
export class CropperjsWrapperModule { }

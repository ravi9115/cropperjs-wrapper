import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CropperjsWrapperModule } from 'cropperjs-wrapper';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        CropperjsWrapperModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }

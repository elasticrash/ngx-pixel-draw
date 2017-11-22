import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NgxPixelModule } from './ngx-pixel/ngx-pixel.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxPixelModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

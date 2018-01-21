import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NgxPixelModule } from './ngx-pixel/ngx-pixel.module';
import { D3Service } from './d3/d3.service';


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

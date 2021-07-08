import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './es/inicio/inicio.component';
import {CommonModule} from '@angular/common';
import { CarruselComponent } from './es/carrusel/carrusel.component';
import { HomeComponent } from './en/home/home.component';
import { CarouselComponent } from './en/carousel/carousel.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    CarruselComponent,
    HomeComponent,
    CarouselComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

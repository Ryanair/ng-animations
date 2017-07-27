import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeroListModule } from '../hero-list/hero-list.module';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HeroListModule
  ],
  providers: [],
  declarations: [
    AppComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

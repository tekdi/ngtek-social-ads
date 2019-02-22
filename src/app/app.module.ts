import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TjSocialAdsModule } from 'tj-social-ads';
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TjSocialAdsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

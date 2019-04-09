import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SocialAdsModule } from '../../projects/social-ads/src/lib/social-ads.module';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SocialAdsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

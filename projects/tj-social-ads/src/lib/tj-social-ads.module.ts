import { NgModule } from '@angular/core';
import { TjSocialAdsComponent } from './tj-social-ads.component';
import { SaferesourcePipe } from './saferesource.pipe';

@NgModule({
  declarations: [TjSocialAdsComponent, SaferesourcePipe],
  imports: [
  ],
  exports: [TjSocialAdsComponent]
})
export class TjSocialAdsModule { }

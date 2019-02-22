import { NgModule } from '@angular/core';
import { SocialAdsComponent } from './social-ads.component';
import { SaferesourcePipe} from './saferesource.pipe';
@NgModule({
  declarations: [SocialAdsComponent, SaferesourcePipe],
  imports: [
  ],
  exports: [SocialAdsComponent]
})
export class SocialAdsModule { }

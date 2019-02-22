import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
@Component({
  selector: 'app-social-ads',
  template: `<iframe
              [src]="frameURL | saferesource"
              frameborder="0" scrolling="no"
              [height]=height_img
              width="222"
              id='iframe_ads'>
            </iframe>`,
  styles: []
})
export class SocialAdsComponent implements OnInit {
  frameURL = '';
  ad_data_json = '';
  @Input() height_img: string;
  ad_widget = {ads_params: {}, context_params: {keys: false}};
  @Input() baseUrl;
  @Input() ad_unit: string;
  @Input() zone: number;
  @Input() num_ads: number;
  @Input() ad_rotation: number;
  @Input() no_rand: number;
  @ViewChild('iframe_ads') iframe: ElementRef;
  constructor() { }

  ngOnInit() {
    let ad_data_json;
    this.ad_widget.ads_params = {
      'ad_unit': this.ad_unit,
      'zone': this.zone,
      'num_ads': this.num_ads,
      'ad_rotation': this.ad_rotation,
      'no_rand': this.no_rand
   };
   ad_data_json = encodeURI(JSON.stringify(this.ad_widget));
   this.frameURL = this.baseUrl + 'index.php?option=com_sa&view=remotecontrol&template=system&adData=' +
                   ad_data_json + '&tmpl=component';
  }
}

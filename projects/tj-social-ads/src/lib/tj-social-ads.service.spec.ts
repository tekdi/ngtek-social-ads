import { TestBed } from '@angular/core/testing';

import { TjSocialAdsService } from './tj-social-ads.service';

describe('TjSocialAdsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TjSocialAdsService = TestBed.get(TjSocialAdsService);
    expect(service).toBeTruthy();
  });
});

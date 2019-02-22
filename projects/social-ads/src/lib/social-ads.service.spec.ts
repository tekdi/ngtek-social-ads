import { TestBed } from '@angular/core/testing';

import { SocialAdsService } from './social-ads.service';

describe('SocialAdsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SocialAdsService = TestBed.get(SocialAdsService);
    expect(service).toBeTruthy();
  });
});

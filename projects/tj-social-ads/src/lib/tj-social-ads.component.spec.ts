import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TjSocialAdsComponent } from './tj-social-ads.component';

describe('TjSocialAdsComponent', () => {
  let component: TjSocialAdsComponent;
  let fixture: ComponentFixture<TjSocialAdsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TjSocialAdsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TjSocialAdsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

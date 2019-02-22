import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialAdsComponent } from './social-ads.component';

describe('SocialAdsComponent', () => {
  let component: SocialAdsComponent;
  let fixture: ComponentFixture<SocialAdsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SocialAdsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialAdsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

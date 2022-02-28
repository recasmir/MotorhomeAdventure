import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MembersAdsComponent } from './members-ads.component';

describe('MembersAdsComponent', () => {
  let component: MembersAdsComponent;
  let fixture: ComponentFixture<MembersAdsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MembersAdsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MembersAdsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

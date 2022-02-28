import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberMatchComponent } from './member-match.component';

describe('MemberMatchComponent', () => {
  let component: MemberMatchComponent;
  let fixture: ComponentFixture<MemberMatchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MemberMatchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberMatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

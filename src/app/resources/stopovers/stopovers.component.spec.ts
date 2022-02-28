import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StopoversComponent } from './stopovers.component';

describe('StopoversComponent', () => {
  let component: StopoversComponent;
  let fixture: ComponentFixture<StopoversComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StopoversComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StopoversComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientDetailDocComponent } from './patient-detail-doc.component';

describe('PatientDetailDocComponent', () => {
  let component: PatientDetailDocComponent;
  let fixture: ComponentFixture<PatientDetailDocComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientDetailDocComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientDetailDocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

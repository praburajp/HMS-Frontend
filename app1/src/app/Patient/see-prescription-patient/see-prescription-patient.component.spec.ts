import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeePrescriptionPatientComponent } from './see-prescription-patient.component';

describe('SeePrescriptionPatientComponent', () => {
  let component: SeePrescriptionPatientComponent;
  let fixture: ComponentFixture<SeePrescriptionPatientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeePrescriptionPatientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeePrescriptionPatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

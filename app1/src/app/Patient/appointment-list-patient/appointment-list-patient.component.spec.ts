import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointmentListPatientComponent } from './appointment-list-patient.component';

describe('AppointmentListPatientComponent', () => {
  let component: AppointmentListPatientComponent;
  let fixture: ComponentFixture<AppointmentListPatientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppointmentListPatientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppointmentListPatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

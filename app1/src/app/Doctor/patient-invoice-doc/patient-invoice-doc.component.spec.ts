import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientInvoiceDocComponent } from './patient-invoice-doc.component';

describe('PatientInvoiceDocComponent', () => {
  let component: PatientInvoiceDocComponent;
  let fixture: ComponentFixture<PatientInvoiceDocComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientInvoiceDocComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientInvoiceDocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

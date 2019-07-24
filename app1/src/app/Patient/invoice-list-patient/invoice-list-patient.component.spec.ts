import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoiceListPatientComponent } from './invoice-list-patient.component';

describe('InvoiceListPatientComponent', () => {
  let component: InvoiceListPatientComponent;
  let fixture: ComponentFixture<InvoiceListPatientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvoiceListPatientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvoiceListPatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

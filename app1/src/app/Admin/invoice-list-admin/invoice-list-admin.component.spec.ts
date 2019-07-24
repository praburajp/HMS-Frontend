import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoiceListAdminComponent } from './invoice-list-admin.component';

describe('InvoiceListAdminComponent', () => {
  let component: InvoiceListAdminComponent;
  let fixture: ComponentFixture<InvoiceListAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvoiceListAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvoiceListAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

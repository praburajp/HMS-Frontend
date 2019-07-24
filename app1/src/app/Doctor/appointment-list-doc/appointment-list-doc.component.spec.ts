import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointmentListDocComponent } from './appointment-list-doc.component';

describe('AppointmentListDocComponent', () => {
  let component: AppointmentListDocComponent;
  let fixture: ComponentFixture<AppointmentListDocComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppointmentListDocComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppointmentListDocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

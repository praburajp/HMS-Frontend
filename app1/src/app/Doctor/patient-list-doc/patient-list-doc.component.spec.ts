import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientListDocComponent } from './patient-list-doc.component';

describe('PatientListDocComponent', () => {
  let component: PatientListDocComponent;
  let fixture: ComponentFixture<PatientListDocComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientListDocComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientListDocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetPrescriptionDocComponent } from './set-prescription-doc.component';

describe('SetPrescriptionDocComponent', () => {
  let component: SetPrescriptionDocComponent;
  let fixture: ComponentFixture<SetPrescriptionDocComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetPrescriptionDocComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetPrescriptionDocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

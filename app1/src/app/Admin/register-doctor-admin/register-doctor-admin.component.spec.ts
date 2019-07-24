import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterDoctorAdminComponent } from './register-doctor-admin.component';

describe('RegisterDoctorAdminComponent', () => {
  let component: RegisterDoctorAdminComponent;
  let fixture: ComponentFixture<RegisterDoctorAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterDoctorAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterDoctorAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

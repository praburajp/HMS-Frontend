import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMedicineAdminComponent } from './add-medicine-admin.component';

describe('AddMedicineAdminComponent', () => {
  let component: AddMedicineAdminComponent;
  let fixture: ComponentFixture<AddMedicineAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddMedicineAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMedicineAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

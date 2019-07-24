import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicineListAdminComponent } from './medicine-list-admin.component';

describe('MedicineListAdminComponent', () => {
  let component: MedicineListAdminComponent;
  let fixture: ComponentFixture<MedicineListAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicineListAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicineListAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

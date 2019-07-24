import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeeDepartmentListAdminComponent } from './see-department-list-admin.component';

describe('SeeDepartmentListAdminComponent', () => {
  let component: SeeDepartmentListAdminComponent;
  let fixture: ComponentFixture<SeeDepartmentListAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeeDepartmentListAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeeDepartmentListAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

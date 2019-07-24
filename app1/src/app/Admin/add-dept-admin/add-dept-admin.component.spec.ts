import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDeptAdminComponent } from './add-dept-admin.component';

describe('AddDeptAdminComponent', () => {
  let component: AddDeptAdminComponent;
  let fixture: ComponentFixture<AddDeptAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddDeptAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDeptAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

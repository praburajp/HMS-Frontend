import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../admin.service';

@Component({
  selector: 'app-add-dept-admin',
  templateUrl: './add-dept-admin.component.html',
  styleUrls: ['./add-dept-admin.component.css']
})
export class AddDeptAdminComponent implements OnInit {

  deptName: string;
  constructor(private adminService: AdminService) { }

  ngOnInit() {
  }

  addDeptToList() {
     this.adminService.addDepartment(this.deptName).subscribe(response => {
       if (response.status === 200 ) {
         alert('You have added department');
       } else {
         alert('Something went wrong');
       }
     });
  }
}

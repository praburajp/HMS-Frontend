import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../admin.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-see-department-list-admin',
  templateUrl: './see-department-list-admin.component.html',
  styleUrls: ['./see-department-list-admin.component.css']
})
export class SeeDepartmentListAdminComponent implements OnInit {
  dept: any[];
  constructor(private adminService: AdminService, private router: Router) { }

  ngOnInit() {
    this.onLoadDeptList();
  }

  onLoadDeptList() {
    this.adminService.getDeptList().subscribe(response => {
      if (response.status === 200) {
          const body = response.json();
          this.dept = body;
      } else {
        alert('Something went wrong');
      }
    });
  }

  onClickLogout() {
    sessionStorage.clear();
    this.router.navigate(['/']);
  }
}

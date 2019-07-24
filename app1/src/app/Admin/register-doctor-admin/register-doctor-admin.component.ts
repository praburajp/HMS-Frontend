import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../admin.service';

@Component({
  selector: 'app-register-doctor-admin',
  templateUrl: './register-doctor-admin.component.html',
  styleUrls: ['./register-doctor-admin.component.css']
})
export class RegisterDoctorAdminComponent implements OnInit {
  docName: string;
  docContactInfo: string;
  daysInWeek: number;
  availableTime: number;
  perPatientTime: number;
  listDept: any[];
  selectedDeptId: any;
  constructor(private adminService: AdminService) {
    this.onLoadListDept();
   }

  ngOnInit() {
  }

  onLoadListDept() {
    const tempObs = this.adminService.getDeptList();
    tempObs.subscribe(response => {
      const body = response.json();
      this.listDept = body;
      console.log('listDept ' + this.listDept);
    });
  }

  registerDoctor() {
      this.adminService.registerDoctorWithSchedule(this.docName, this.docContactInfo
        , this.daysInWeek, this.availableTime, this.perPatientTime, this.selectedDeptId
        ).subscribe(response => {
          if (response.status === 200) {
            const body = response.json();
            alert('Doctor Successfully added' + body.email + '   ' + body.password);
          } else {
            alert('Something went wrong');
          }
        });
  }
}

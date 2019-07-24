import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-appointment-list-admin',
  templateUrl: './appointment-list-admin.component.html',
  styleUrls: ['./appointment-list-admin.component.css']
})
export class AppointmentListAdminComponent implements OnInit {

  listAppo: any[];
  constructor(private adminService: AdminService,
    private router: Router) { }

  ngOnInit() {
    this.onLoadGetAppointmentList();
  }

  onApproveAppointment(appId: number) {
    this.adminService.setAppointment(appId).subscribe(response => {
      if (response.status === 200) {
          alert('You have approved the given appointment');
          this.ngOnInit();
       } else {
        alert('Sorry, Something wrong happened');
        this.router.navigate(['/appointment-list-doc']);
      }
    });
  }

  onLoadGetAppointmentList() {
    this.adminService.getAllAppointmentList().subscribe(response => {
      if (response.status === 200) {
        this.listAppo = response.json();
      } else {
        alert('Something went wrong');
      }
    });
  }
}

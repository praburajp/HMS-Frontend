import { Component, OnInit } from '@angular/core';
import { DoctorService } from '../../doctor.service';
import { Router } from '@angular/router';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-appointment-list-doc',
  templateUrl: './appointment-list-doc.component.html',
  styleUrls: ['./appointment-list-doc.component.css']
})
export class AppointmentListDocComponent implements OnInit {

  listAppo: any;
  constructor(private doctorService: DoctorService,
                private router: Router) {
                }

  ngOnInit() {
    this.onLoadAppontmentList();
  }

  onLoadAppontmentList() {
    this.doctorService.getAppointmentListByDoctorId().subscribe(response => {
      if (response.status === 200) {
        const body = response.json();
        this.listAppo = body;
        const d = this.listAppo[18];
        console.log(d);
      }
    });
  }
  onApproveAppointment(appId: number) {
    this.doctorService.setAppointment(appId).subscribe(response => {
      if (response.status === 200) {
          alert('You have approved the given appointment');
          //this.router.navigate(['/appointment-list-doc']);
          this.ngOnInit();
       } else {
        alert('Sorry, Something wrong happened');
        this.router.navigate(['/appointment-list-doc']);
      }
    });
  }

  setPrescription(appId) {
    this.router.navigate(['/set-prescription-doc'], {queryParams: {id: appId}});
  }
}

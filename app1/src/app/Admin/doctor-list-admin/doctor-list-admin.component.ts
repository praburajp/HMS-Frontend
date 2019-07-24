import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../admin.service';

@Component({
  selector: 'app-doctor-list-admin',
  templateUrl: './doctor-list-admin.component.html',
  styleUrls: ['./doctor-list-admin.component.css']
})
export class DoctorListAdminComponent implements OnInit {
  doctorsList: any[];
  constructor(private adminService: AdminService) {
    console.log('in ctor of doc list component');
    this.onLoad(); }

  ngOnInit() {
  }

  onLoad() {
    console.log('inside the onload method of doc list component');
    this.adminService.getDoctorList().subscribe(response => {
     if (response.status === 200 ) {
      const body = response.json();
      this.doctorsList = body;
      console.log(body);
     } else {
       alert('Something went wrong');
     }
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-dashboard-doctor',
  templateUrl: './dashboard-doctor.component.html',
  styleUrls: ['./dashboard-doctor.component.css']
})
export class DashboardDoctorComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  onClickLogout() {
    sessionStorage.clear();
    this.router.navigate(['/']);
  }
}

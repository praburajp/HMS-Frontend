import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-appointment-patient',
  templateUrl: './appointment-patient.component.html',
  styleUrls: ['./appointment-patient.component.css']
})
export class AppointmentPatientComponent implements OnInit {
  patientProblem: string;
  patientAppDate: string;
  constructor() { }

  ngOnInit() {
  }
  regAppointment() {
    
  }
}

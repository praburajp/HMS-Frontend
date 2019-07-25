import { Component, OnInit } from '@angular/core';
import { PatientService } from '../../patient.service';

@Component({
  selector: 'app-appointment-patient',
  templateUrl: './appointment-patient.component.html',
  styleUrls: ['./appointment-patient.component.css']
})
export class AppointmentPatientComponent implements OnInit {
  patientProblem: string;
  patientAppDate: Date;
  doctor: any;
  constructor(private patientService: PatientService) { 
    this.onLoadGetDoctorDetails();
  }

  ngOnInit() {
  }
  regAppointment() {
    this.patientService.postAppointmentWithOldPatient(this.patientProblem,this.patientAppDate,this.doctor.id).
    subscribe(response => {
      if(response.status === 200 ) {
        alert('successfully register the appointment');
      } else {
        alert('something went wrong');
      }
    })
  }

  onLoadGetDoctorDetails() {
    this.patientService.getDoctorDetails().subscribe(response => {
      if(response.status === 200 ) {
        this.doctor = response.json();
      } else {
        alert('Something went wrong');
      }
    });
  }

}

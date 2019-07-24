import { Component, OnInit } from '@angular/core';
import { PatientService } from '../../patient.service';

@Component({
  selector: 'app-appointment-list-patient',
  templateUrl: './appointment-list-patient.component.html',
  styleUrls: ['./appointment-list-patient.component.css']
})
export class AppointmentListPatientComponent implements OnInit {

  constructor(private patientService: PatientService) { }
  patientId = this.patientService.patientId;
  listAppo: any[];
  ngOnInit() {
    this.onLoadAppointmentListForPatient();
  }

  onLoadAppointmentListForPatient() {
    this.patientService.getAppoinmentListByPatientId().subscribe(response => {
      if (response.status === 200) {
        this.listAppo = response.json();
      } else {
        alert('Sorry, Something went wrong ');
      }
    });
  }
}

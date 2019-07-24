import { Component, OnInit } from '@angular/core';
import { DoctorService } from '../../doctor.service';
import { PatientService } from '../../patient.service';

@Component({
  selector: 'app-see-prescription-patient',
  templateUrl: './see-prescription-patient.component.html',
  styleUrls: ['./see-prescription-patient.component.css']
})
export class SeePrescriptionPatientComponent implements OnInit {

  constructor(private doctorService: DoctorService,
    private patientService: PatientService) { }

    patientId = this.patientService.patientId;
    patient_app: any[];
    patient: any[];
  ngOnInit() {
    this.onLoadPatientDetails();
  }

  onLoadPatientDetails() {
    this.patientService.getAppointmentDetailsOfPatient().subscribe(response => {
      if (response.status === 200) {
        const data = response.json();
        this.patient = data;
        console.log(this.patient);
        console.log(this.patient.length);
      }
    });
  }

}

import { Component, OnInit } from '@angular/core';
import { DoctorService } from '../../doctor.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-patient-detail-doc',
  templateUrl: './patient-detail-doc.component.html',
  styleUrls: ['./patient-detail-doc.component.css']
})
export class PatientDetailDocComponent implements OnInit {
  patientId: any;
  patient: any;
  patient_app: any[];
  constructor(private doctorService: DoctorService,
                private activatedRoute: ActivatedRoute) {
    activatedRoute.queryParams.subscribe(params => {
      this.patientId = params['id'];
      this.doctorService.getAppointmentDetailsOfPatientByDoc(this.patientId).subscribe(response => {
        if (response.status === 200) {
          const data = response.json();
          console.log(data);
          this.patient = data;
        }
      });
    });
  }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { DoctorService } from '../../doctor.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-patient-list-doc',
  templateUrl: './patient-list-doc.component.html',
  styleUrls: ['./patient-list-doc.component.css']
})
export class PatientListDocComponent implements OnInit {

  patient: any[];
  constructor(private doctorService: DoctorService,
                private router: Router) { }

  ngOnInit() {
    this.onLoadPatientListByDoc();
  }
  onLoadPatientListByDoc() {
    this.doctorService.getPatientListByDoc().subscribe(response => {
      if (response.status === 200) {
        const body = response.json();
        this.patient = body;
      }

    });
  }

  onClickViewDetails(patientId: number) {
    //    this.router.navigate(['/movie-details'], { queryParams: { id: movie.id } });
    this.router.navigate(['/patient-detail-doc'], { queryParams: {id: patientId}});
  }

  onClickViewPrecription(patientId: number) {
    //    this.router.navigate(['/movie-details'], { queryParams: { id: movie.id } });
    this.router.navigate(['/patient-invoice-doc'], { queryParams: {id: patientId}});
  }
  viewPrescriptionOfPatient(patientId: number) {
  }
}

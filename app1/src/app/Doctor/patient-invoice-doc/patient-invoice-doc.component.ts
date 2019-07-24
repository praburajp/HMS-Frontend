import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DoctorService } from 'src/app/doctor.service';

@Component({
  selector: 'app-patient-invoice-doc',
  templateUrl: './patient-invoice-doc.component.html',
  styleUrls: ['./patient-invoice-doc.component.css']
})
export class PatientInvoiceDocComponent implements OnInit {
  patientId: any;
  patientInvoicesList: any[];
  constructor(private doctorService: DoctorService,
    private activatedRoute: ActivatedRoute) {
      activatedRoute.queryParams.subscribe(params => {
        this.patientId = params['id'];
        this.doctorService.getInvoicesOFPatientByDoc(this.patientId).subscribe(response => {
          if (response.status === 200) {
            const data = response.json();
            this.patientInvoicesList = data;
          }
        });
      });
}


  ngOnInit() {
  }

}

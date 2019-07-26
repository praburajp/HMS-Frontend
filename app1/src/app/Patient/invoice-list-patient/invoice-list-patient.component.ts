import { Component, OnInit } from '@angular/core';
import { PatientService } from '../../patient.service';
import { DoctorService } from '../../doctor.service';
import { Router } from '@angular/router';

import * as jspdf from 'jspdf';
import html2canvas from 'html2canvas'; 

@Component({
  selector: 'app-invoice-list-patient',
  templateUrl: './invoice-list-patient.component.html',
  styleUrls: ['./invoice-list-patient.component.css']
})
export class InvoiceListPatientComponent implements OnInit {

  constructor(private patientService: PatientService,
    private router: Router) {
      this.onLoadGetPatinetInvoices();
     }
    patientId = this.patientService.patientId;
    patientInvoicesList: any;
  ngOnInit() {
    this.onLoadGetPatinetInvoices();
  }
  onLoadGetPatinetInvoices() {
    this.patientService.getInvoicesOFPatient().subscribe(response => {
      if (response.status === 200 ) {
        this.patientInvoicesList = response.json();
      } else {
        alert('something went wrong');
      }
    });
  }

  payTheInvoiceByPatient(invoiceId: number) {
    console.log('here invoice id is ' + invoiceId);
    this.patientService.payForParticularInvoice(invoiceId).subscribe(response => {
      if (response.status === 200) {
        alert('you have successfully paid the invoice');
        this.ngOnInit();
      } else {
        alert('Something went wrong Sorry');
      }
    });
  }

  payAllInvoiceForpatient() {
    this.router.navigate(['/bill-patient']);
    // this.patientService.payAllInvoiceForpatient().subscribe(response => {
    //   if (response.status === 200) {
    //     alert('you have successfully paid for all the invoice');
    //     this.ngOnInit();
    //   } else {
    //     alert('Something went wrong Sorry');
    //   }
    // });
  }
text22()
{
	html2canvas(document.querySelector('#test1')).then(canvas => {
	var pdf = new jspdf('p','pt',[canvas.width,canvas.height]);
	var imgData= canvas.toDataURL("image/jpeg",1.0)l
	pdf.addImage(imgData,0,0,canvas.width,canvas.width);
	pdf.save("mypdf.pdf");
}
}

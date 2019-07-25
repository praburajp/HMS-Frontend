import { Component, OnInit } from '@angular/core';
import { PatientService } from '../../patient.service';

@Component({
  selector: 'app-bill-patient',
  templateUrl: './bill-patient.component.html',
  styleUrls: ['./bill-patient.component.css']
})
export class BillPatientComponent implements OnInit {

  constructor(private patientService: PatientService) { }

  ngOnInit() {
  }


  patientId = this.patientService.patientId;
  patientInvoicesList: any;
  totalPrice: number;
  
  onLoadGetPatinetInvoices() {
    this.patientService.getInvoicesOFPatient().subscribe(response => {
      if (response.status === 200 ) {
        this.patientInvoicesList = response.json();
        var value = 0;
        for (let index = 0; index < this.patientInvoicesList.length; index++) {
          if(this.patientInvoicesList[index].status === 'unpaid') {
            value = value + this.patientInvoicesList[index].price;
          }
        }
        this.totalPrice = value;
      } else {
        alert('something went wrong');
      }
    });
  }


  payAllInvoiceForpatient() {
    this.patientService.payAllInvoiceForpatient().subscribe(response => {
      if (response.status === 200) {
        alert('you have successfully paid for all the invoice');
        this.ngOnInit();
      } else {
        alert('Something went wrong Sorry');
      }
    });
  }
  
}

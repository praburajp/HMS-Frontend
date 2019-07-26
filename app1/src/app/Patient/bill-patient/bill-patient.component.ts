import { Component, OnInit } from '@angular/core';
import { PatientService } from '../../patient.service';

@Component({
  selector: 'app-bill-patient',
  templateUrl: './bill-patient.component.html',
  styleUrls: ['./bill-patient.component.css']
})
export class BillPatientComponent implements OnInit {

  patientId = this.patientService.patientId;
  patientInvoicesList =[];
  totalPrice: number;
  constructor(private patientService: PatientService) { }

  ngOnInit() {
    this.onLoadGetPatinetInvoices();  
  }



  
  onLoadGetPatinetInvoices() {
    this.patientService.getInvoicesOFPatient().subscribe(response => {
      if (response.status === 200 ) {
        const data = response.json();
        console.log(data);
        console.log(data.length);
        
        
        
        var value = 0;
        for (var index = 0; index < data.length; index++) {
          console.log(index);
          
          if(data[index].status === 'unpaid') {
            console.log(data[index]);
            
            this.patientInvoicesList.push(data[index]);
            value = value + data[index].price;
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

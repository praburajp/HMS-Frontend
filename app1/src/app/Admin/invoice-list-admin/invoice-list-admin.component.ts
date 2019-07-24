import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../admin.service';

@Component({
  selector: 'app-invoice-list-admin',
  templateUrl: './invoice-list-admin.component.html',
  styleUrls: ['./invoice-list-admin.component.css']
})
export class InvoiceListAdminComponent implements OnInit {
  patientInvoicesList: any[];
  constructor(private adminService: AdminService) { }

  ngOnInit() {
    this.onLoadPatientInvoiceList();
  }

  onLoadPatientInvoiceList() {
    this.adminService.getAllInvoices().subscribe(response => {
      if (response.status === 200 ) {
        this.patientInvoicesList = response.json();
      } else {
        alert('Something went wrong');
      }
    });
  }
}

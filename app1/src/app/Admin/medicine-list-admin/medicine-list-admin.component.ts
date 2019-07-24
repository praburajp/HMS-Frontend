import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../admin.service';

@Component({
  selector: 'app-medicine-list-admin',
  templateUrl: './medicine-list-admin.component.html',
  styleUrls: ['./medicine-list-admin.component.css']
})
export class MedicineListAdminComponent implements OnInit {
  medicineList: any[];
  constructor(private adminService: AdminService) { }

  ngOnInit() {
    this.onLoadMedicineList();
  }

  onLoadMedicineList() {
    this.adminService.getAllMedicineList().subscribe(response => {
      if (response.status === 200 ) {
        const body = response.json();
        console.log(body);
        this.medicineList = body;
      } else {
        alert('something went wrong');
      }
    });
  }
}

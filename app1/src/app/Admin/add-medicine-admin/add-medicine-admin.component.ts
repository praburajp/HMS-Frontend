import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../admin.service';

@Component({
  selector: 'app-add-medicine-admin',
  templateUrl: './add-medicine-admin.component.html',
  styleUrls: ['./add-medicine-admin.component.css']
})
export class AddMedicineAdminComponent implements OnInit {

  medName: string;
  medCategory: string;
  medPrice: number;
  constructor(private adminService: AdminService) { }

  ngOnInit() {
  }

  onClickRegisterMedicine() {
    if (this.medName.length === 0) {
      alert('Medicine Name could not be empty');
    } else if (this.medCategory.length === 0) {
      alert('Medicine Category could not be empty');
    } else if (this.medPrice === 0) {
      alert('Medicine Price could not be empty');
    } else {
      this.adminService.registerMedicine(this.medName, this.medCategory, this.medPrice).subscribe(response => {
        if (response.status === 200 ) {
          alert('Medicine Successfully added');
          this.medName = '';
          this.medCategory = '';
          this.medPrice = 0;
        } else {
          alert('Medicine not added');
        }
      });
    }
  }
  /**  onClickRegisterMedicince() {
    if (this.medName.length === 0 ) {
      alert('Enter medicine name');
    } else if (this.medCategory.length === 0) {
      alert('Enter medicine category');
    } else if (this.medPrice === 0) {
      alert('Enter medicine price ');
    } else {
      this.adminService.registerMedicine(this.medName, this.medCategory, this.medPrice).subscribe(response => {
        if (response.status === 200) {
          alert('Medicine Registered successfully');
        } else {
          alert('Something went wrong');
        }
      })
    }
  } */
}

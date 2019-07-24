import { Component, OnInit } from '@angular/core';
import { DoctorService } from '../../doctor.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-set-prescription-doc',
  templateUrl: './set-prescription-doc.component.html',
  styleUrls: ['./set-prescription-doc.component.css']
})
export class SetPrescriptionDocComponent implements OnInit {

  appId: any;
  medicineList: any[];
  prescList: any[10];
  constructor(private doctorService: DoctorService,
    private activatedRoute: ActivatedRoute) {
      activatedRoute.queryParams.subscribe(params => {
        this.appId = params['id'];
        this.doctorService.getAllMedicines().subscribe(response => {
          if (response.status === 200) {
            this.medicineList = response.json();
            console.log(this.medicineList);
          }
        });
      });
    }

  ngOnInit() {
  }

  onClickPresc(combined) {
    console.log(combined.value);
    this.doctorService.onSetPrecription(combined.value, this.appId)
    .subscribe(response => {
      if (response.status === 200) {
        alert('You have successfully given the prescription');
      } else {
        alert('something went wrong');
      }
    });
  }

}

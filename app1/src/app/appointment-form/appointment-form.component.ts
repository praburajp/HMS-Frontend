import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-appointment-form',
  templateUrl: './appointment-form.component.html',
  styleUrls: ['./appointment-form.component.css']
})
export class AppointmentFormComponent implements OnInit {

  selectedRadio: any;
  bg: any[];
  listDoc: any[];
  listDept: any[];
  listPatient: any[];
  patientName: string;
  patientGender: string;
  patientBloodGroup: string;
  patientContactInfo: string;
  patientProblem: string;
  patientAppDate: Date;
  selectedDeptId: any;
  selectedPatientId: number;
  selectedDocId: any;
  patientId: any;
  constructor(private commonService: CommonService,
                private router: Router) {
    this.bg = ['a+', 'b+', 'ab+'];
    this.onLoadListDept();
    this.onLoadPatientList();
   }

  ngOnInit() {
  }
  newPatientRegister() {
    console.log('selected radio---->' + this.selectedRadio);
    console.log('patientName---->' + this.patientName);
    console.log('patientGender---->' + this.patientGender);
    console.log('patientBloodGroup---->' + this.patientBloodGroup);
    console.log('patientContactInfo---->' + this.patientContactInfo);
    console.log('dept selected ----->>>' + this.selectedDeptId);
    console.log('Selected Doctor  ---->>>'  + this.selectedDocId);
    console.log('patientProblem---->' + this.patientProblem);
    console.log('patientAppDate---->' + this.patientAppDate );
    this.commonService.postAppointmentWithNewPatient(this.patientName, this.patientGender,
      this.patientBloodGroup, this.patientContactInfo, this.patientAppDate, this.selectedDeptId, this.selectedDocId,
      this.patientProblem).subscribe(response => {
        if (response.status === 200) {
          const user = response.json();
          alert('Your appointment request has been sent,' +
          '/n your Login Crendentials are \n Login ID' + user.email +
          '\n Password :' + user.password);
              this.router.navigate(['/home']);
        } else {
          alert('Something went wrong');
          this.router.navigate(['/appointment-form']);
        }
        // if (response.status == 200) {
        //   alert("added");
        // } else {
        //   alert('something went wrong');
        // }
      });
  }

  oldPatientRegister() {
    const tempDocDeptWise = this.commonService.postAppointmentWithOldPatient(this.selectedPatientId,
       this.patientProblem, this.patientAppDate, this.selectedDocId);
    tempDocDeptWise.subscribe(response => {
     if (response.status === 200) {
       console.log(" lhksjfabssan RESPONSE__---------------"  + response);
        const user = response.json();
      alert('Your appointment request has been sent,' +
      '/n your Login Crendentials are \n Login ID' + user.email +
      '\n Password :' + user.password);
          this.router.navigate(['/home']);
    } else {
      alert('Something went wrong');
      this.router.navigate(['/appointment-form']);
    }
    });
  }
  onLoadListDept() {
    const tempObs = this.commonService.getDeptList();
    tempObs.subscribe(response => {
      const body = response.json();
      this.listDept = body;
      console.log('listDept ' + this.listDept);
    });
  }

  onLoadPatientList() {
    this.commonService.getPatientList().subscribe(response => {
      if (response.status === 200) {
        const body = response.json();
        this.listPatient = body;
      } else {
        alert('something went wrong');
      }
    });
  }
  changeDept(selectedDeptID) {

    console.log('fsknalf    ' + selectedDeptID);
    const tempDocDeptWise = this.commonService.getDoctorDeptWise(selectedDeptID);
    tempDocDeptWise.subscribe(response => {
      if (response.status === 200) {
        const body = response.json();
        this.listDoc = body;
        console.log('listdoc' + this.listDoc);
      } else {
        console.log('kuch nhi aaya');
        alert('something went wrong');
      }
    });
  }

  onClickOld() {
    alert('Please Log in first');
    this.router.navigate(['/login']);
  }
}

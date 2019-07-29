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

    // if (new Date(this.patientAppDate.toString()).valueOf() < new Date().valueOf()) {
    //   alert('this.patientAppDate.valueOf() < new Date().valueOf()');
    // } else {
    //   console.log(new Date().valueOf() + '');
    //   console.log(new Date(this.patientAppDate.toString()).valueOf() + '');
      
    //   alert('ok');
    // }
    if (this.patientName.length === 0) {
      alert('Please enter patient name');
    } else if (this.patientGender.length === 0 ) {
      alert('Please select your gender');
    } else if (this.patientBloodGroup.length === 0) {
      alert('Please select your blood group');
    } else if (this.patientContactInfo.length === 0) {
      alert('Please enter your email');
    } else if (this.patientProblem.length === 0) {
      alert('Please enter your problem');
    } else if (new Date(this.patientAppDate.toString()).valueOf() < new Date().valueOf()) {
      alert(`don't select previous date`);
    } else {
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
        });
    }
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

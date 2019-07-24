import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/common.service';
import { Router } from '@angular/router';
import { PatientService } from '../../patient.service';

@Component({
  selector: 'app-add-appointment-patient',
  templateUrl: './add-appointment-patient.component.html',
  styleUrls: ['./add-appointment-patient.component.css']
})
export class AddAppointmentPatientComponent implements OnInit {
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
  constructor(private commonService: CommonService,
              private router: Router,
              private patientService: PatientService) {
   }
   patientId = this.patientService.patientId;
  ngOnInit() {
    this.bg = ['a+', 'b+', 'ab+'];
    this.onLoadListDept();
    this.onLoadPatientList();
  }
  oldPatientRegister() {
    const tempDocDeptWise = this.commonService.postAppointmentWithOldPatient(this.selectedPatientId,
       this.patientProblem, this.patientAppDate, this.selectedDocId);
    tempDocDeptWise.subscribe(response => {
     if (response.status === 200) {
       console.log(' lhksjfabssan RESPONSE__---------------'  + response);
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
      }
    });
  }

  changeDept(selectedDeptID) {

    console.log('fsknalf    ' + selectedDeptID);
    const tempDocDeptWise = this.commonService.getDoctorDeptWise(selectedDeptID);
    tempDocDeptWise.subscribe(response => {
      const body = response.json();
      this.listDoc = body;
      console.log('listdoc' + this.listDoc);
    });
  }
}

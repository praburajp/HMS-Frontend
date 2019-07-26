import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
@Injectable({
  providedIn: 'root'
})
export class CommonService {
  //url = 'http://172.0.0.41:8080/HMS_v2/user';
url = 'http://192.168.43.162:8080/HMS_v2/user';

  role = ['Admin', 'Doctor', 'Patient' ];
  constructor(private http: Http) { }

  onLogin(email: string, password: string, role: string) {
    const body = {
      'email': email,
      'password': password,
      'role': role
    };

    const headers = new Headers({'Content-Type': 'application/json'});
    const requestOptions = new RequestOptions({headers: headers});
    return this.http.post(this.url + '/login', body, requestOptions);
    // return this.http.get(this.url);
  }

  getDeptList() {
    console.log('in admin service in getDeptList');
    return this.http.get(this.url + '/dept');
  }

  getDoctorDeptWise(id) {
    console.log('in admin service in getDoctorDeptWise');
    return this.http.get(this.url + '/doctor/' + id);
  }

  postAppointmentWithNewPatient(pName: string, pGender: string, pBg: string, pConInfo: string, appDate: Date, deptId: number,
    docId: number, problem: string) {
    const body = {
      'patientName': pName,
      'patientGender': pGender,
      'patientBloodGroup': pBg,
      'patientContactInfo': pConInfo,
      'appointmentDate': appDate,
      'deptId': deptId,
      'docId': docId,
      'problem': problem
    };

    const headers = new Headers({'Content-Type': 'application/json'});
    const requestOptions = new RequestOptions({headers: headers});
    return this.http.post(this.url + '/app/new', body, requestOptions);
  }

  postAppointmentWithOldPatient(patientId: number, pProblem: string, pDate: Date, docId: number) {
    const body = {
      'id': patientId,
      'appointmentDate': pDate,
      'problem': pProblem,
      'docId': docId
    };

    const headers = new Headers({'Content-Type': 'application/json'});
    const requestOptions = new RequestOptions({headers: headers});
    return this.http.post(this.url + '/app/old', body, requestOptions);
  }

  getPatientList() {
    return this.http.get(this.url + '/patient');
  }
}

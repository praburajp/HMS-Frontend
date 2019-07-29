import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Http, Headers, RequestOptions } from '@angular/http';
@Injectable({
  providedIn: 'root'
})
export class PatientService {

 // url = 'http://172.0.0.41:8080/HMS_v2/patient';
<<<<<<< HEAD
 url = 'http://localhost:7070/HMS/patient';
=======
 url = 'http://192.168.43.162:8080/HMS_v2/patient';
>>>>>>> fe9f9adeac22d3fa09f117a108281a38e9f6d837
  patientId: number;
  constructor(private router: Router,
    private http: Http) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    // check if user has logged in
    if (sessionStorage['login_status'] === '1' && sessionStorage['role'] === 'Patient')  {
      const x = sessionStorage['id'];
      this.patientId = +x;
      return true;
    }
    this.router.navigate(['/login']);
    return false;
  }

  getAppoinmentListByPatientId() {
    return this.http.get(this.url + '/app/' + sessionStorage['id']);
  }

  payForParticularInvoice(invoiceId) {
    return this.http.get(this.url + '/inv/' + invoiceId);
  }
  payAllInvoiceForpatient() {
    return this.http.get(this.url + '/inv/all/' + sessionStorage['id']);
  }

  getInvoicesOFPatient() {
    return this.http.get(this.url + '/allinv/' + sessionStorage['id']);
  }
  getAppointmentDetailsOfPatient() {
    return this.http.get(this.url + '/details/' + sessionStorage['id']);
  }

  getDoctorDetails() {
    return this.http.get(this.url + '/doctor/' + sessionStorage['id']);
  }
  postAppointmentWithOldPatient(pProblem: string, pDate: Date, docId: number) {
    const body = {
      'id': sessionStorage['id'],
      'appointmentDate': pDate,
      'problem': pProblem,
      'docId': docId
    };

    const headers = new Headers({'Content-Type': 'application/json'});
    const requestOptions = new RequestOptions({headers: headers});
    return this.http.post(this.url + '/app/old', body, requestOptions);
  }
}

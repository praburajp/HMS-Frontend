import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Http, Headers, RequestOptions } from '@angular/http';
@Injectable({
  providedIn: 'root'
})
export class PatientService {

 // url = 'http://172.0.0.41:8080/HMS_v2/patient';
 url = 'http://172.0.2.82:8080/HMS_v2/patient';
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
}
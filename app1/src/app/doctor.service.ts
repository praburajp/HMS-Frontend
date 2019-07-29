import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {
  //url = 'http://172.0.0.41:8080/HMS_v2/doctor';
url = 'http://localhost:7070/HMS/doctor';
  docId: number;
  constructor(private http: Http,
                private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    // check if user has logged in
    if (sessionStorage['login_status'] === '1' && sessionStorage['role'] === 'Doctor')  {
      const x = sessionStorage['id'];
      this.docId = +x;
      return true;
    }
    this.router.navigate(['/login']);
    return false;
  }

  getAppointmentListByDoctorId() {
    return this.http.get(this.url + '/app/' + sessionStorage['id']);
  }

  setAppointment(appId: number) {
    return this.http.get(this.url + '/app/set/' + appId);
  }

  getPatientListByDoc() {
    return this.http.get(this.url + '/patientlist/' + sessionStorage['id']);
  }

  getAppointmentDetailsOfPatientByDoc(patientId: any) {
    return this.http.get(this.url + '/patientdetails/' + patientId);
  }

  getInvoicesOFPatientByDoc(patientId: any) {
    return this.http.get(this.url + '/patient/inv/' + patientId);
  }

  getAllMedicines() {
    return this.http.get(this.url + '/med' );
  }
  // registerPrecriptionForAppointment(pres1,){

  // }

  onSetPrecription(combined, appId) {
    const body = [
      combined.combination1, combined.combination2, combined.combination3
    ];
    console.log(body);
    const headers = new Headers({'Content-Type': 'application/json'});
    const requestOptions = new RequestOptions({headers: headers});
    return this.http.post(this.url + '/presc/reg/' + appId, body, requestOptions);
  }

}

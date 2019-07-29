import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Headers, RequestOptions, Http } from '@angular/http';


@Injectable({
  providedIn: 'root'
})
export class AdminService {
     //url = 'http://172.0.0.41:8080/HMS_v2/admin';
url = 'http://localhost:7070/HMS/admin';
  constructor(private router: Router,
    private http: Http) { }
  adminId: number;
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    // check if user has logged in
    if (sessionStorage['login_status'] === '1' && sessionStorage['role'] === 'Admin')  {
      const x = sessionStorage['id'];
      this.adminId = +x;
      // this.adminId = sessionStorage['id'];
      return true;
    }
    this.router.navigate(['/login']);
    return false;
  }

  addDepartment(deptName: string) {
    const body = {
      'deptName' : deptName
    };
    const headers = new Headers({'Content-Type': 'application/json'});
    const requestOptions = new RequestOptions({headers: headers});
    return this.http.post(this.url + '/dept/reg' , body, requestOptions);
  }

  registerDoctorWithSchedule(docName: string, docContactInfo: string, daysInWeek: number,
    availableTime: number, perPatientTime: number, selectedDeptId: any) {
    const body = {
      'docName': docName,
      'docContactInfo': docContactInfo,
      'daysInWeek': daysInWeek,
      'availableTime': availableTime,
      'perPatientTime': perPatientTime,
      'docStatus': 'active'
    };

    const headers = new Headers({'Content-Type': 'application/json'});
    const requestOptions = new RequestOptions({headers: headers});
    return this.http.post(this.url + '/doctor/reg/' + selectedDeptId, body, requestOptions);
  }

  getDeptList() {
    console.log('in admin service in getDeptList');
    return this.http.get(this.url + '/dept');
  }
  getDoctorList() {
    console.log('in admin service ');
    return this.http.get(this.url + '/doctor');
  }
  registerMedicine (medName: string, medCategory: string, medPrice: number) {
    const body = {
      'medName': medName,
      'medCategory': medCategory,
      'medPrice': medPrice
    };
    const headers = new Headers({'Content-Type': 'application/json'});
    const requestOptions = new RequestOptions({headers: headers});
    return this.http.post(this.url + '/med/reg' , body, requestOptions);
  }

  getAllMedicineList() {
    return this.http.get(this.url + '/med');
  }

  getAllInvoices() {
    return this.http.get(this.url + '/showinv');
  }

  setAppointment(appId: number) {
    return this.http.get(this.url + '/setapp/' + appId);
  }

  getAllAppointmentList() {
    return this.http.get(this.url + '/app/all');
  }
}

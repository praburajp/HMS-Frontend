import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email = '';
  password = '';
  selectedRole = '';
  constructor(private commonService: CommonService,
                private router: Router) { }
  roleList = this.commonService.role;
  ngOnInit() {
  }
  onLogin() {
    if (this.email.length === 0) {
      alert('enter email');
    } else if (this.password.length === 0) {
      alert('enter password');
    } else {
      this.commonService
        .onLogin(this.email, this.password, this.selectedRole)
        .subscribe(response => {          
          if (response.status === 200) {
            const body = response.json();
            const user = body;
            // cache the login status
            // localStorage
            sessionStorage['login_status'] = '1';
            sessionStorage['role'] = this.selectedRole;
            sessionStorage['id'] = user.id;

            alert('welcome to the app');
            if (this.selectedRole === 'Admin') {
                this.router.navigate(['/dashboard-admin']);
            } else if (this.selectedRole === 'Doctor') {
              this.router.navigate(['/dashboard-doctor']);
            } else if (this.selectedRole === 'Patient' ) {
              this.router.navigate(['/patient-dashboard']);
            } else {
              this.router.navigate(['/home']);
            }
          } else {
            console.log('INVALID CREDENTIALS');
            
            alert('Invalid Credentials');
          }
        });
    }
  }

  onCancel() {
    this.router.navigate(['/login']);
  }

  onSignup() {
    this.router.navigate(['/register']);
  }
}

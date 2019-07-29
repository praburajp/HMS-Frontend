import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router) { }
checkFlag: any ;
  ngOnInit() {
  }

  isLogin() {
    const check = sessionStorage['login_status'];
    console.log('check-------->' + check);
    if (check === undefined) {
      console.log('true');
      return true;
    } else {
      console.log('false');
      return false;
    }
  }

  onLogout() {
    sessionStorage.clear();
    this.router.navigate(['/']);
  }
}

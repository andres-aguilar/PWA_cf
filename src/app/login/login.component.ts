import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../services/auth.service';

@Component({
  selector: 'login',
  templateUrl: 'login.component.html'
})
export class LoginComponent implements OnInit {
  constructor(private auth: AuthService, private router : Router) {}

  ngOnInit() {
    this.auth.getUser().subscribe(console.log);
  }

  login() {
    this.auth.login().then(() => {
      this.router.navigate(['/']);
    });
  }
}

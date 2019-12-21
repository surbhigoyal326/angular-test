import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';
import { BasicAuthenticationService } from '../service/basic-authentication.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public username = 'admin';
  password = '';
  invalidLogin = false;
  errorMessage = 'Invalid Credentials';
  constructor(private router: Router,
              private hardcodedAuthenticationService: HardcodedAuthenticationService,
              private basicAuthenticationService: BasicAuthenticationService
    ) { }

  ngOnInit() {
  }

  handleJWTAuthLogin() {
    this.basicAuthenticationService.executeBasicJwtAuthService(this.username, this.password)
        .subscribe(
          data => {
            console.log(data);
            console.log((['welcome', this.username]));
            this.router.navigate(['welcome', this.username]);
            this.invalidLogin = false;
          },
          error => {
            console.log(error);
            this.invalidLogin = true;
          }
        );
  }

}

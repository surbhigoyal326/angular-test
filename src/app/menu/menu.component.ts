import { Component, OnInit } from '@angular/core';
import { BasicAuthenticationService } from '../service/basic-authentication.service';
import { WelcomeComponent } from './../welcome/welcome.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
   // isUserLoggedIn: boolean;
   name = '';

  constructor(public basicAuthenticationService: BasicAuthenticationService) { }

  ngOnInit() {
  }
}

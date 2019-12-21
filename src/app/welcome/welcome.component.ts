import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataService } from './../service/data/welcome-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
name = '';
messageFromService: string;
  constructor(private route: ActivatedRoute, private welcomeDataService: WelcomeDataService) {}

  ngOnInit() {
    console.log('surbhi');
    this.name = this.route.snapshot.params['name'];
    // console.log(this.route.snapshot.params[name]);
  }
  getWelcomeMessage() {
   console.log(this.welcomeDataService.executeApiService());
   this.welcomeDataService.executeApiService().subscribe(
     response => this.handleResponse(response),
     error => this.handleError(error)
   );
   // console.log('last line');
  }

  getWelcomeMessageWithParam() {
    // console.log(this.welcomeDataService.executeApiServiceWithPathVariable(this.name));
    this.welcomeDataService.executeApiServiceWithPathVariable(this.name).subscribe(
      response => this.handleResponse(response),
      error => this.handleError(error)
    );
    // console.log('last line');
   }


  handleResponse(response) {
   this.messageFromService = response.message;
   // console.log(this.messageFromService);
  }

  handleError(error) {
   this.messageFromService = error.error.message;
  }
}

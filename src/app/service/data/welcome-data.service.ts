import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


export class HelloWorldBean {
  constructor(public message: string) {
  }
}


@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(private httpClient: HttpClient) { }

  executeApiService() {
    return this.httpClient.get<HelloWorldBean>('http://localhost:8080/hello-world-bean');
    // console.log('Api service');
  }

  executeApiServiceWithPathVariable(name) {
    // let basicAuthString = this.createBasicAuthHeader();
    // let headers = new HttpHeaders({
    //   Authorization : basicAuthString
    // });
    // console.log(name);
    return this.httpClient.get<HelloWorldBean>(`http://localhost:8080/hello-world/path-variable/${name}`);
  }

  createBasicAuthHeader() {
    let username = 'user';
    let password = 'password';
    let basicAuthStrng = 'Basic' + btoa(username + ':' + password);
    return basicAuthStrng;
  }
}

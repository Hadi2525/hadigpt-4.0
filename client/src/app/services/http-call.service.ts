import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiServiceMessage } from '../models/api-service-message';
import { Router } from '@angular/router';
import { AuthenticationSubmit } from '../models/authenticationSubmit';
import { FormGroup } from '@angular/forms';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class HttpCallService {

  constructor(private http: HttpClient,
              private router: Router,
              private dataService: DataService) { }

  onAuthSubmit(data : Partial<any>) {
    this.http.post(this.dataService.baseApiUrl + this.dataService.ApiUrls.authenticate, data).subscribe({
      next: (result: ApiServiceMessage) => {
        console.log(`Authentication Success: ${result.message}`);
        this.router.navigate(['chat'])
      },
      error: (err) => {
        window.alert('Login Faild.');
        console.error(`An error occured. ${err}`);
        window.location.href = window.location.href
      }
    })
  }

  onSendMessage(message: Partial<any>) {
    this.http.post(this.dataService.baseApiUrl + this.dataService.ApiUrls.sendMessage, message).subscribe({
      next: (result: ApiServiceMessage) => {
        console.log(`We got the Message: ${result.message}`);
        this.dataService.updateGptMessage(result)
      },
      error: (err) => {
        console.error(err)
        window.alert('An error occured. Look into the Console')
      }
    })

  }
}

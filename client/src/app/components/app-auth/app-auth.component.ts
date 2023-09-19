import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpCallService } from 'src/app/services/http-call.service';

@Component({
  selector: 'app-app-auth',
  templateUrl: './app-auth.component.html',
  styleUrls: ['./app-auth.component.css']
})
export class AppAuthComponent {

  authenticationForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(private http: HttpClient,
              private router: Router,
              private callService: HttpCallService) {}

  onSubmit() {
    const formData = this.authenticationForm.value;
    this.callService.onAuthSubmit(formData)

  }



}

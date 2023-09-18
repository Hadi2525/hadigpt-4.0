import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormGroup, FormControl } from '@angular/forms';
import { UserAuthentication } from 'src/app/models/authentication';

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

  constructor(private http: HttpClient) {}

  onSubmit() {
    const formData = this.authenticationForm.value;

    this.http.post('http://127.0.0.1:5000/api/authenticate', formData).subscribe({
      next: (result: UserAuthentication) => {
        console.log(`Authentication Success: ${result.message}`);
      },
      error: (err) => {
        console.error(`An error occured. ${err}`);
      }
    })
  }



}

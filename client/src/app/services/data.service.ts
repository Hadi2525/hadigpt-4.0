import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ApiServiceMessage } from '../models/api-service-message';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }
  public baseApiUrl = 'http://127.0.0.1:5000/';
  public ApiUrls = {
    authenticate: 'api/authenticate',
    sendMessage: 'api/sendMessage'
  }

  gptMessageObs: BehaviorSubject<ApiServiceMessage> | undefined;

  updateGptMessage(message: ApiServiceMessage) {
    this.gptMessageObs?.next(message)
  }

  getGptMessage() {
    return this.gptMessageObs?.asObservable()
  }





}

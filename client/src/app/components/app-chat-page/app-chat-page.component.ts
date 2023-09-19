import { DataService } from './../../services/data.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ApiServiceMessage } from 'src/app/models/api-service-message';
import { HttpCallService } from 'src/app/services/http-call.service';

@Component({
  selector: 'app-app-chat-page',
  templateUrl: './app-chat-page.component.html',
  styleUrls: ['./app-chat-page.component.css']
})
export class AppChatPageComponent implements OnInit {

  constructor(private callService: HttpCallService,
              private dataService: DataService) {
                this.dataService.getGptMessage()?.subscribe({
                  next: (message) => {
                    this.gptMessage = message
                  },
                  error: (err) => {
                    console.error(`An error occured ${err}`)
                  }
                })
              }

  ngOnInit(): void {
    
  }

  chatForm = new FormGroup ({
    message: new FormControl('')
  })

  gptMessage = new ApiServiceMessage;


  onChatSubmit() {
    const message = this.chatForm.value
    this.callService.onSendMessage(message)
  }

}

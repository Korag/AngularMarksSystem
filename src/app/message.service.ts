import { Injectable } from '@angular/core';
import { MessagesComponent } from './messages/messages.component';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  messages: string[] = [];

  addMessage(message: string) {
    this.messages.push(message); 

    if(this.messages.length==10)
    {
    this.messages = this.messages.splice(8,9);
    } 
  }

  clearMessage()
  {
    this.messages = [];
  }

  constructor() { }
}

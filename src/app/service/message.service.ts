import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Email } from '../models/email';

@Injectable()

export class MessageService {
  private contactFormUrl = '/form';
  
  constructor(private _http: HttpClient) { }
  
  sendMessage(newEmail:Email) {

    return this._http.post(process.env.PORT || 8080 + this.contactFormUrl, newEmail);
  }
}
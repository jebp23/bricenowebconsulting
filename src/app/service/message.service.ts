import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Email } from '../models/email';

@Injectable()

export class MessageService {
  private contactFormUrl = '/api/form';
  
  constructor(private _http: HttpClient) { }
  
  sendMessage(newEmail:Email) {

    return this._http.post(this.contactFormUrl, newEmail);
  }
}
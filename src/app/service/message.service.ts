import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()

export class MessageService {
  private contactFormUrl = '/form';
  
  constructor(private _http: HttpClient) { }
  
  sendMessage(newEmail) {

    return this._http.post(this.contactFormUrl, newEmail);
  }
}
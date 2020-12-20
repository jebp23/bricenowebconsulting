import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Email } from '../models/email'

@Injectable()

export class MessageService {
  private formUrl = '/api/form';
  
  constructor(private _http: HttpClient) { }
  
  sendMessage(body: Email) {
    return this._http.post(this.formUrl, body);
  }
}
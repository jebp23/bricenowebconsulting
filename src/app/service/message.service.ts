import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Email } from '../models/email';

@Injectable()

export class MessageService {
  
  constructor(private _http: HttpClient) { }
  
  sendMessage(body:Email) {

    return this._http.post('/contactForm', body);
  }
}
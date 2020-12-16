import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Email } from '../models/email';

@Injectable()

export class MessageService {
  
  constructor(private _http: HttpClient) { }
  
  sendMessage(body:Email) {
    let form = JSON.stringify(body);
    let headers = new HttpHeaders().set('Content-Type','application/json');

    return this._http.post('https://bricenowebconsulting.herokuapp.com/contactForm', form, {headers});
  }
}
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Email } from '../models/email'

@Injectable()

export class MessageService {
  private formUrl = '/api/form';
  
  constructor(private _http: HttpClient) { }
  
  sendMessage(body: Email /*Change 'body' to 'email'*/) {
    //let body = JSON.stringify(email);
    let headers = new HttpHeaders().set('Content-Type','application/json');

    return this._http.post(this.formUrl, body, {headers});
  }
}
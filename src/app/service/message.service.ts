import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
/*import { Observable } from 'rxjs';
import { Email } from '../models/email';*/

@Injectable()

export class MessageService {
  private formUrl = '/api/form';
  
  constructor(private _http: HttpClient) {

  }
  
  sendMessage(body) {
    let headers = new HttpHeaders().set('Content-Type','application/json');
    return this._http.post(this.formUrl, /*JSON.stringify(body)*/body, {headers});
  }
}
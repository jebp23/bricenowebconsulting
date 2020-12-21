import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Email } from '../models/email';

@Injectable()

export class MessageService {
  private formUrl = 'https://bricenowebconsulting.herokuapp.com/form';
  
  constructor(private _http: HttpClient) { }
  
  sendMessage(body): Observable<Email> {
    return this._http.post<Email>(this.formUrl, body);
  }
}
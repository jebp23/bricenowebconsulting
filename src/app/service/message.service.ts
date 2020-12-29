import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Email } from '../models/email';

@Injectable()

export class MessageService {
  public formUrl:string;
  
  constructor(private _http: HttpClient) {
    this.formUrl = 'https://bricenowebconsulting.herokuapp.com/api/form';
  }
  
  sendMessage(body): Observable<any> {
    return this._http.post<any>(this.formUrl, body);
  }
}
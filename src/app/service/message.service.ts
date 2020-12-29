import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Email } from '../models/email';

@Injectable()

export class MessageService {
  private formUrl = '/api/form';
  
  constructor(private http: HttpClient) {

  }
  
  sendMessage(body: Email): Observable<any>{
    let headers = new HttpHeaders().set('Content-Type','application/json');
    return this.http.post(this.formUrl, body, {headers});
  }
}
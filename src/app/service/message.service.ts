import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
//import { Observable } from 'rxjs';
//import { Email } from '../models/email';

@Injectable()

export class MessageService {
  
  constructor(private http: HttpClient) { }
  
  sendMessage(body){
    let headers = new HttpHeaders().set('Content-Type','application/json');
    return this.http.post('https://bricenowebconsulting.herokuapp.com/api/form', body, {headers});  
  }
}
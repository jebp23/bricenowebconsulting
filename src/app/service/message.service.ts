import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
//import { Email } from '../models/email';

@Injectable()

export class MessageService {
  //public formUrl:string;
  
  constructor(private _http: HttpClient) {
    //this.formUrl = process.env.PORT;
  }
  
  sendMessage(body): Observable<any> {
    let headers = new HttpHeaders().set('Content-Type','application/json')
    return this._http.post<any>(process.env.PORT+'api/form', body, {headers});
  }
}
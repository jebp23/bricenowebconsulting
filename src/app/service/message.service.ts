import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()

export class MessageService {
  private formUrl = 'contact/form';
  
  constructor(private _http: HttpClient) { }
  
  sendMessage(params): Observable<any> {
    let body = JSON.stringify(params);
    let headers = new HttpHeaders().set('Content-Type','application/json')
    return this._http.post<any>(this.formUrl, body, {headers});
  }
}
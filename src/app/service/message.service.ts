import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()

export class MessageService {
  private formUrl = 'https://bricenowebconsulting.herokuapp.com/form';
  
  constructor(private _http: HttpClient) { }
  
  sendMessage(formResponse): Observable<any> {
    let body = JSON.stringify(formResponse);
    return this._http.post(this.formUrl, body);
  }
}
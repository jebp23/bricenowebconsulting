import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()

export class MessageService {
  private formUrl = 'https://bricenowebconsulting.herokuapp.com/form';
  
  constructor(private _http: HttpClient) { }
  
  sendMessage(body): Observable<any> {
    console.log(body);
    const httpOptions = {
      headers: new HttpHeaders({
          'Content-Type': 'application/x-www-form-urlencoded',
      })
  }
    return this._http.post<any>(this.formUrl, body, httpOptions);
  }
}
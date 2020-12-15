import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormContent } from '../form-content';

@Injectable()

export class MessageService {
  
  constructor(private _http: HttpClient) { }
  
  sendMessage(body:FormContent) {
    return this._http.post('/contactForm', body);
  }
}

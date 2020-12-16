import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Email } from '../models/email';

@Injectable()

export class MessageService {
  
  constructor(private _http: HttpClient) { }
  
  sendMessage(body:Email) {
    let form = JSON.stringify(body);
    let headers = new HttpHeaders().set('Content-Type','application/json');

    return this._http.post('https://bricenowebconsulting.herokuapp.com/contactForm', form, {headers});
  }
}

/*
Schema validation failed with the following errors:

  Data path ".builders['app-shell']" should have required property 'class'.

Error: Schema validation failed with the following errors:

  Data path ".builders['app-shell']" should have required property 'class'.

    at MergeMapSubscriber.project (/tmp/build_d2427bb9_/node_modules/@angular/cli/node_modules/@angular-devkit/core/src/workspace/workspace.js:215:42)*/
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()

export class MessageService {
  
  constructor(private _http: HttpClient) { }
  
  sendMessage(body) {
    return this._http.post('contact/contactForm', body);
  }
}

/*
Schema validation failed with the following errors:

  Data path ".builders['app-shell']" should have required property 'class'.

Error: Schema validation failed with the following errors:

  Data path ".builders['app-shell']" should have required property 'class'.

    at MergeMapSubscriber.project (/tmp/build_d2427bb9_/node_modules/@angular/cli/node_modules/@angular-devkit/core/src/workspace/workspace.js:215:42)*/
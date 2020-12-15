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
Schema validation failed with the following errors:

  Data path ".builders['app-shell']" should have required property 'class'.

Error: Schema validation failed with the following errors:

  Data path ".builders['app-shell']" should have required property 'class'.

    at MergeMapSubscriber.project (/tmp/build_d2427bb9_/node_modules/@angular/cli/node_modules/@angular-devkit/core/src/workspace/workspace.js:215:42)
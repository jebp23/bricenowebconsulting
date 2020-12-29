import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
//import { Observable } from 'rxjs';
//import { MessageService } from '../service/message.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  @ViewChild('form') formTemplate: any;

  constructor(private http: HttpClient) {}

  submitForm(form: NgForm) {
    if(form.valid){         
      console.log(form); 
      const value = form.value;
      const firstName = value.firstName;
      const email = value.email;

      let formRequest = { firstName, email};
      
      let headers = new HttpHeaders().set('Content-Type','application/json');
      alert("Thank you for contacting us!!! We will reply very soon.");
      form.reset();
      return this.http.post('https://bricenowebconsulting.herokuapp.com/api/form', formRequest, {headers}).subscribe();      
    }
  }

  /*

    this.db.list('/messages').push(formRequest);
    form.reset();
  }*/

  ngOnInit(): void {
  }

}
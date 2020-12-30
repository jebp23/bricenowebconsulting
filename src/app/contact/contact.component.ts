import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
//import { MessageService } from '../service/message.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  constructor(private http: HttpClient) {}

  submitForm(form: NgForm) {
    if(form.valid){         
      console.log(form); 
      
      //let headers = new HttpHeaders().set('Content-Type','application/json');
      alert("Thank you for contacting us!!! We will reply very soon.");
      form.reset();
      return this.http.post('https://bricenowebconsulting.herokuapp.com/api/form', form/*, {headers}*/).subscribe();      
    }
  }

  /*

    this.db.list('/messages').push(formRequest);
    form.reset();
  }*/

  ngOnInit(): void {
  }

}
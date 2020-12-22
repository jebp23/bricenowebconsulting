import { Component, OnInit, ViewChild } from '@angular/core';
import { MessageService } from '../service/message.service';
import { Email } from'../models/email';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  @ViewChild('form') formTemplate: any;

  public email: Email;  

  constructor(public _MessageService: MessageService) {
    this.email = new Email('','','','','');
  }

  submitForm(form) {
    this._MessageService.sendMessage(this.email).subscribe(
			response => {
				if(response.project){
          form.reset();
        }
      });





    /*
    if(this.formTemplate.valid){
      this._MessageService.sendMessage(this.email).subscribe();    
      alert("Thank you for contacting us!!! We will reply very soon.")
      this.formTemplate.reset();
    }*/
  }

  ngOnInit(): void {
  }

}
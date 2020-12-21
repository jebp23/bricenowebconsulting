import { Component, OnInit, ViewChild } from '@angular/core';
import { MessageService } from '../service/message.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  @ViewChild('form') formTemplate: any;

  constructor(public _MessageService: MessageService) {}

  submitForm() {
    let form = this.formTemplate.value;
    
    let reqObj = {
      firstName: form.firstName,
		  lastName: form.lastName,
		  phone: form.number,
		  email: form.string,		
		  companName: form.string
    }

    if(this.formTemplate.valid){
      this._MessageService.sendMessage(reqObj).subscribe(data => {
        console.log(data);
      });
    
      alert("Thank you for contacting us!!! We will reply very soon.")
      this.formTemplate.reset();
    }
  }

  ngOnInit(): void {
  }

}
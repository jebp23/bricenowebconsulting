import { Component, OnInit, ViewChild} from '@angular/core';
import { MessageService } from '../service/message.service';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  @ViewChild('form') formTemplate: any;


  constructor(public _MessageService: MessageService) {}

  submitForm(form){
    if(this.formTemplate.valid){      
      this._MessageService.sendMessage(form).subscribe(() => {
        alert("Thank you for contacting us!!! We will reply very soon.")
      })
    
      this.formTemplate.reset();  
    }
  }

  ngOnInit(): void {
  }

}
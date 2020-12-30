import { Component, OnInit, ViewChild} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MessageService } from '../service/message.service';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  @ViewChild('form') formTemplate: any;


  constructor(private http: HttpClient, public _MessageService: MessageService) {}

  submitForm(form){
    if(this.formTemplate.valid){
      this._MessageService.sendMessage(form).subscribe()
      alert("Thank you for contacting us!!! We will reply very soon.")
      this.formTemplate.reset(res => {
        console.log(res);
      });
    }
  }

  ngOnInit(): void {
  }

}
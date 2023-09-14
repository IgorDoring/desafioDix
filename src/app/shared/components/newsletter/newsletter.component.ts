import { Component } from '@angular/core';
import {FormControl, FormGroup, Validator, Validators} from "@angular/forms";
import {PortalService} from "../../../portal.service";
import {Subscription} from "rxjs";
import {JsonPipe} from "@angular/common";

@Component({
  selector: 'app-newsletter',
  templateUrl: './newsletter.component.html',
  styleUrls: ['./newsletter.component.css']
})
export class NewsletterComponent {
  newsletterForm: FormGroup | any
  newsletterSubs: Subscription | any

  assigned: boolean = false
  sent: boolean = false

  constructor(private portalService: PortalService) {
    this.newsletterForm = new FormGroup({
      'name': new FormControl(null, [Validators.required, Validators.min(1)]),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'agreement': new FormControl(false, Validators.required)
    })
  }

  ngOnInit(){

  }

  onSubmit(){

    if(this.newsletterForm.valid && this.newsletterForm.value.agreement){
      let json = JSON.stringify({"email": this.newsletterForm.value.email, "name": this.newsletterForm.value.name})
      this.sent = true
      this.newsletterSubs = this.portalService.assinarNews(json).subscribe(
        (res) => {
          console.log(res)
          if(res['message'] != "Erro de validação"){
            this.assigned = true
          }
        })
    }
  }
}

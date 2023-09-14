import {Component, EventEmitter, Input, Output} from '@angular/core';
import {PortalService} from "../../../portal.service";
import {Enquete} from "../../../models/enquete.model";
import {FormControl, FormGroup, NgForm, Validators} from "@angular/forms";

@Component({
  selector: 'app-enquete-section',
  templateUrl: './enquete-section.component.html',
  styleUrls: ['./enquete-section.component.css']
})
export class EnqueteSectionComponent {

  enqForm: FormGroup;

  @Input() enq: Enquete | any

  constructor(private portalService: PortalService) {

    this.enqForm = new FormGroup({
      'alternatives': new FormControl(null, Validators.required)
    })
  }

  onSubmit(){
    this.portalService.votarEnquete(this.enq.id, this.enqForm.value.alternatives).subscribe(
      (newEnq) => {
        console.log(newEnq)
      })
    this.enq.is_active = !this.enq.is_active
  }

}

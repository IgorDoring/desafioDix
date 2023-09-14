import { Component } from '@angular/core';
import {PortalService} from "../../portal.service";
import {FormControl, FormGroup, NgForm} from "@angular/forms";
import {Enquete} from "../../models/enquete.model";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-enquetes',
  templateUrl: './enquetes.component.html',
  styleUrls: ['./enquetes.component.css']
})
export class EnquetesComponent {

  enquetes: Enquete[] = []
  enquetesSubs: Subscription | any


  constructor(private portalService: PortalService) {
  }

  ngOnInit(){
    this.enquetesSubs = this.portalService.loadEnquetes().subscribe((enquetes) => {
      this.enquetes.push(...enquetes)
      }
    )
  }

  ngOnDestroy(){
    this.enquetesSubs.unsubscribe()
  }

}

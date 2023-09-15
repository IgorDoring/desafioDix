import { Component } from '@angular/core';
import {PortalService} from "../../portal.service";
import {FormControl, FormGroup, NgForm} from "@angular/forms";
import {Enquete} from "../../models/enquete.model";
import {Subscription} from "rxjs";
import {Router} from "@angular/router";

@Component({
  selector: 'app-enquetes',
  templateUrl: './enquetes.component.html',
  styleUrls: ['./enquetes.component.css']
})
export class EnquetesComponent {

  enquetes: Enquete[] = []
  enquetesSubs: Subscription | any


  constructor(private portalService: PortalService,
              private router: Router) {
    this.enquetes.push({
      id: 0,
      name: "Nescau ou Toddy?",
      start_date: "2023-09-02",
      end_date: "2023-09-14",
      is_active: true,
      alternatives: ["Nescau", "Toddy"],
      results: {"Nescau": {count: 17, percentage: "17%"}, "Toddy": {count: 83, percentage: "83%"}}
    })
  }

  ngOnInit(){
    console.log(this.router.url)
    this.enquetesSubs = this.portalService.loadEnquetes().subscribe((enquetes) => {
      console.log(enquetes)
      this.enquetes.push(enquetes)
      }
    )
  }

}

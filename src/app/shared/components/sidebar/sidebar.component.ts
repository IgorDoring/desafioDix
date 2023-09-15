import { Component } from '@angular/core';
import {count, Subscription} from "rxjs";
import {Noticia} from "../../../models/noticia.model";
import {Page} from "../../../models/page.model";
import {Enquete} from "../../../models/enquete.model";
import {PortalService} from "../../../portal.service";
import {NgForm} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {


  lastNewsSubs: Subscription | any
  enquetesSubs: Subscription | any

  lastnews: Noticia[] = []
  enquetes: Enquete[] = []
  showEnquete: boolean = true
  constructor(private portalService: PortalService,
              private route: ActivatedRoute,
              private router: Router) {

  }

  ngOnInit(){
    if(this.router.url == "/enquetes"){
      this.showEnquete = false
    }else{
      this.enquetes.push({
        id: 0,
        name: "Nescau ou Toddy?",
        start_date: "2023-09-02",
        end_date: "2023-09-14",
        is_active: true,
        alternatives: ["Nescau", "Toddy"],
        results: {"Nescau": {count: 17, percentage: "17%"}, "Toddy": {count: 83, percentage: "83%"}}
      })

      this.enquetesSubs = this.portalService.loadEnquetes().subscribe(
        (enquetes) => {
          console.log(enquetes)
          // this.enquetes.push(enquetes)
        },
        error => {
          console.log(error)
        }
      )

      this.lastNewsSubs = this.portalService.loadUltimasNoticias().subscribe((lastnews) => {
          this.lastnews = lastnews;
          this.lastnews.splice(3, this.lastnews.length-3)
        }
      )
    }
  }

  ngOnChanges(){
    console.log(this.router.url)
  }
}

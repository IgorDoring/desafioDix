import { Component } from '@angular/core';
import {Subscription} from "rxjs";
import {Noticia} from "../../../models/noticia.model";
import {Page} from "../../../models/page.model";
import {Enquete} from "../../../models/enquete.model";
import {PortalService} from "../../../portal.service";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {


  lastNewsSubs: Subscription
  enquetesSubs: Subscription

  lastnews: Noticia[] = []
  enquetes: Enquete[] = []

  constructor(private portalService: PortalService) {

    this.enquetesSubs = this.portalService.loadEnquetes().subscribe((enquetes) => {
        this.enquetes = enquetes
      }
    )

    this.lastNewsSubs = this.portalService.loadUltimasNoticias().subscribe((lastnews) => {
        this.lastnews = lastnews;
        this.lastnews.splice(3, this.lastnews.length-3)
      }
    )
  }

  ngOnDestroy(){
    this.lastNewsSubs.unsubscribe()
    this.enquetesSubs.unsubscribe()
  }
}

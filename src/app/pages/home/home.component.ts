import { Component } from '@angular/core';

import {map, Subscription} from 'rxjs';
import {PortalService} from "../../portal.service";
import {Enquete} from "../../models/enquete.model";
import {NgForm} from "@angular/forms";
import {Noticia} from "../../models/noticia.model";
import {Page} from "../../models/page.model";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  destaquesSubs: Subscription
  homeSubs: Subscription
  maislidasSubs: Subscription;

  destaques: Noticia[] = []
  home: Page[] = []
  maisLidas: Noticia[] = [];

  constructor(private portalService: PortalService) {

    this.destaquesSubs = this.portalService.loadDestaques().subscribe((destaques) => {
      this.destaques = destaques
      }
    )

    this.homeSubs = this.portalService.loadHome().subscribe((home) => {
      this.home = home;
      }
    )

    this.maislidasSubs = this.portalService.loadMaisLidas().subscribe((maisLidas) => {
        this.maisLidas = maisLidas;
        this.maisLidas.splice(3, 2)
      }
    )
  }

  ngOnInit(){
  }

  ngOnDestroy(){
    this.destaquesSubs.unsubscribe()
    this.homeSubs.unsubscribe()
    this.maislidasSubs.unsubscribe()
  }
}

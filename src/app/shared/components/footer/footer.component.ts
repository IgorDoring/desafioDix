import { Component } from '@angular/core';
import {Menu} from "../../../models/menu.model";
import {PortalService} from "../../../portal.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  mapa: Menu[] = []
  footerSubs: Subscription;
  constructor(private portalService: PortalService) {
    this.footerSubs = this.portalService.loadMenu().subscribe(menu => {
        this.mapa = menu
      }
    );
  }
}

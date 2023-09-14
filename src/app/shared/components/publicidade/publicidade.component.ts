import {Component, Input} from '@angular/core';
import {Banner} from "../../../models/banner.model";
import {PortalService} from "../../../portal.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-publicidade',
  templateUrl: './publicidade.component.html',
  styleUrls: ['./publicidade.component.css']
})
export class PublicidadeComponent {
  @Input() tipo: number = 1
  @Input() banners: Banner[] | any;

  bannersSubs: Subscription | any

  constructor(private portalService: PortalService) {

  }

  ngOnInit(){
    this.bannersSubs = this.portalService.loadBanners().subscribe((banners) => {
      this.banners = banners
    })
  }
}

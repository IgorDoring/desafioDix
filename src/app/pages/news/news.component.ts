import { Component } from '@angular/core';
import {Noticia} from "../../models/noticia.model";
import {PortalService} from "../../portal.service";
import {Subscription} from "rxjs";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent {
  noticia: Noticia | any = {}
  noticiaSubs: Subscription | any

  constructor(private portalService: PortalService,
              private route: ActivatedRoute,
              private sanitizer: DomSanitizer
              ) {

  }

  ngOnInit(){
    this.noticiaSubs = this.route.params.subscribe((params) =>{
      this.portalService.loadNoticia(params["slug"]).subscribe((noticia) => {
        this.noticia = noticia
        console.log(noticia)
      }, (error) => {
        this.noticia['error'] = error
      })
    })
    this.noticia['descritive'] = this.sanitizer.bypassSecurityTrustHtml(this.noticia['descritive'])
  }


  ngOnDestroy(){
    this.noticiaSubs.unsubscribe()
  }
}

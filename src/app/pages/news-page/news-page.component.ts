import { Component } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {PortalService} from "../../portal.service";
import {Subscription} from "rxjs";
import {Page} from "../../models/page.model";
import {Noticia} from "../../models/noticia.model";

@Component({
  selector: 'app-news-page',
  templateUrl: './news-page.component.html',
  styleUrls: ['./news-page.component.css']
})
export class NewsPageComponent {

  page?: Page | any
  noticias: Noticia[] | any = []
  pageName: string = ""
  pageId: string = ""
  private pageSubs: Subscription | any;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private portalService: PortalService) {
  }

  ngOnInit(){
    this.pageName = decodeURI(this.route.snapshot.params['pageName'])
    this.pageId = this.route.snapshot.params['pageId']
    this.route.params.subscribe((params) =>{
      console.log(params["pageId"]+params["pageName"]+this.route.snapshot.queryParams['page'])

      this.portalService.carregarPage(this.pageId, this.route.snapshot.queryParams['page']).subscribe(
        (next) => {
          this.page = next
          this.noticias = this.page['data']

        }, (err) => {
          console.log(err)
        })
    })

  }

}

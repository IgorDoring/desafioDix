import { Component } from '@angular/core';
import {Subscription} from "rxjs";
import {ActivatedRoute} from "@angular/router";
import {PortalService} from "../../../portal.service";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  searchSubs: Subscription | any
  search: string = ""
  results: any
constructor(private route: ActivatedRoute,
            private portalService: PortalService) {
  this.searchSubs = this.route.params.subscribe((params) =>{
    this.search = params['search']
    this.portalService.search(params['search']).subscribe(
      (next) => {
        this.results = next
        console.log(next)
      })
  })
}
}

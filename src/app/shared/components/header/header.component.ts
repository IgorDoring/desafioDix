import { Component } from '@angular/core';
import {PortalService} from "../../../portal.service";
import {Menu} from "../../../models/menu.model";
import {Subscription} from "rxjs";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  menu: Menu[] = []
  headerSubs: Subscription;
  search: Subscription | any
  searchForm: FormGroup
  constructor(private portalService: PortalService,
              private router: Router) {

    this.searchForm = new FormGroup({
      'search': new FormControl(null, [Validators.required, Validators.min(3), Validators.max(20)])
    })

    this.headerSubs = this.portalService.loadMenu().subscribe(menu => {
      this.menu = menu
      }
    );
  }

  onSubmit(){
    if (this.searchForm.valid){
      this.router.navigate(["/search"], {queryParams: {search: this.searchForm.value.search}})

      this.searchForm.value.search = ""
    }
  }

  ngOnDestroy(){
    this.headerSubs.unsubscribe()
    this.search.unsubscribe()
  }
}

import {Component, Input} from '@angular/core';
import {Page} from "../../../../models/page.model";

@Component({
  selector: 'app-news-section',
  templateUrl: './news-section.component.html',
  styleUrls: ['./news-section.component.css']
})
export class NewsSectionComponent {
  @Input() newsSection: Page | any
  @Input() redSection: boolean = false
  @Input() destaques: boolean = false
  @Input() ranking: boolean = false
  @Input() lastNews: boolean = false

}

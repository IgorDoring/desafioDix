import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {EnquetesComponent} from "./pages/enquetes/enquetes.component";
import {NewsComponent} from "./pages/news/news.component";
import {NewsPageComponent} from "./pages/news-page/news-page.component";
import {SearchComponent} from "./pages/news-page/search/search.component";

const routes: Routes = [
  {path: "", component: HomeComponent, title: "Portal Stylo"},
  {path: "enquetes", component: EnquetesComponent, title: "Stylo Enquetes"},
  {path: "noticia/:slug", component: NewsComponent, title: "Portal Stylo"},
  {path: "pages/:pageId/:pageName/contents", component: NewsPageComponent, title: "Portal Stylo"},
  {path: "search", component: SearchComponent, title: "Portal Stylo"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

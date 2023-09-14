import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import {HttpClientModule} from "@angular/common/http";
import { NewsSectionComponent } from './pages/home/components/news-section/news-section.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { EnquetesComponent } from './pages/enquetes/enquetes.component';
import { NewsComponent } from './pages/news/news.component';
import { SearchComponent } from './pages/news-page/search/search.component';
import { NewsPageComponent } from './pages/news-page/news-page.component';
import { EnqueteSectionComponent } from './shared/components/enquete-section/enquete-section.component';

import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { PublicidadeComponent } from './shared/components/publicidade/publicidade.component';
import { NewsletterComponent } from './shared/components/newsletter/newsletter.component';
import { SidebarComponent } from './shared/components/sidebar/sidebar.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    PublicidadeComponent,
    NewsSectionComponent,
    EnqueteSectionComponent,
    EnquetesComponent,
    NewsComponent,
    SidebarComponent,
    NewsPageComponent,
    NewsletterComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

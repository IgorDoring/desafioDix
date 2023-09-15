import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs";
import {Menu} from "./models/menu.model";

@Injectable({providedIn: "root"})

export class PortalService{
  apptoken = "64794f8b8069b";

  constructor(private http: HttpClient) {
  }

  loadMenu() {
    return this.http.get<any>(
      "https://local360.com.br/cms/public/api/v1/home-page",
      {headers: {
          app: this.apptoken
        }}
    ).pipe(
      map((res: any[any]): any  => {
        let menu: any[] = []
        menu.push(...res["data"]["pages"])
        return menu
      })
    )
  }

  loadBanners(){
    return this.http.get<any>(
      "https://local360.com.br/cms/public/api/v1/banners",
      {headers: {
          app: this.apptoken
        }}
    ).pipe(
      map((res: any[any]): any  => {
        let menu: any[] = []
        menu.push(...res["data"])
        return menu
      })
    )
  }

  loadDestaques(){
    return this.http.get<any>(
      "https://local360.com.br/cms/public/api/v1/home-page",
      {
        headers: {
          app: this.apptoken
        }
      }
    ).pipe(
      map((res: any[any]): any  => {
        let destaques: any[] = []
        destaques.push(...res["data"]["emphasis"])
        return destaques
      })
    )
  }

  loadHome(){
    return this.http.get<any>(
      "https://local360.com.br/cms/public/api/v1/home-page",
      {
        headers: {
          app: this.apptoken
        }
      }
    ).pipe(
      map((res: any[any]): any  => {
        let home: any[] = []
        home.push(...res["data"]["home"])
        return home
      })
    )
  }

  loadUltimasNoticias(){
    return this.http.get<any>(
      "https://local360.com.br/cms/public/api/v1/last-news",
      {
        headers: {
          app: this.apptoken
        }
      }
    ).pipe(
      map((res: any[any]): any  => {
        let home: any[] = []
        home= res["data"]["data"]
        return home
      })
    )
  }

  loadMaisLidas(){
    return this.http.get<any>(
      "https://local360.com.br/cms/public/api/v1/home-page",
      {
        headers: {
          app: this.apptoken
        }
      }
    ).pipe(
      map((res: any[any]): any  => {
        let maisLidas: any[] = []
        maisLidas= res["data"]["ranking"]
        console.log(maisLidas)
        return maisLidas
      })
    )
  }

  loadEnquetes(){
    return this.http.get<any>(
      "https://local360.com.br/cms/public/api/v1/questions",
      {
        headers: {
          app: this.apptoken
        }
      }
    ).pipe(
      map((enquetes: any[any]): any  => {
        let enq: any[] = []
        enq = enquetes["data"]

        console.log(enquetes)
        return enquetes
      })
    )
  }

  loadNoticia(slug: string){
    let url = "https://local360.com.br/cms/public/api/v1/contents/"+slug
    return this.http.get<any>(
      url,
      {
        headers: {
          app: this.apptoken
        }
      }
    ).pipe(
      map((noticia: any[any]): any  => {
        return noticia['data']
      })
    )
  }

  carregarPage(page: string, offset: number = 1){
    let url = "https://local360.com.br/cms/public/api/v1/pages/"+page+"/contents"
    if (offset > 0){
      url = "https://local360.com.br/cms/public/api/v1/pages/"+page+"/contents?page="+offset
    }
    return this.http.get<any>(
      url,
      {
        headers: {
          app: this.apptoken
        }
      }
    ).pipe(
      map((page: any[any]): any  => {
        return page["data"]
      })
    )
  }

  votarEnquete(id: number, alternativa: string){
    return this.http.put<any>(
      "https://local360.com.br/cms/public/api/v1/questions/"+id,
      {answer: alternativa},
      {
        headers: {
          app: this.apptoken
        }
      }
    ).pipe(
      map((enq: any[any]): any  => {
        return enq
      })
    )
  }

  assinarNews(json: string){
    return this.http.post(
      "https://local360.com.br/cms/public/api/v1/leads",
      json,
      {
        headers: {
          "Content-Type": "application/json",
          app: this.apptoken
        }
      }
    ).pipe(
      map((enq: any[any]): any  => {
        return enq
      })
    )
  }

  search(search: string){
    return this.http.post(
      "https://local360.com.br/cms/public/api/v1/search",
      search,
      {
        headers: {
          Accept: "application/json",
          app: this.apptoken
        }
      }
    ).pipe(
      map((search: any[any]): any  => {
        return search['data']
      })
    )
  }
}

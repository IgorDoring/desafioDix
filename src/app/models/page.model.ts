import {Noticia} from "./noticia.model";

export interface Page {
  id: number,
  name: string,
  contents: Noticia[]
}

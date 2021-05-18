import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class PaisesService {

  url: string;
  constructor(private httpclient: HttpClient) {
    this.url = 'https://restcountries.eu/rest/v2/region/Americas';
  }

  getPaises():Promise<any[]>{
    return this.httpclient.get<any[]>(this.url).toPromise();
  }
}

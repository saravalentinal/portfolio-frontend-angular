import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  url:string="http://localhost:8080/"
  constructor(private http:HttpClient) { }

  obtainData():Observable<any>{
    return this.http.get("../../assets/data/data.json");
  }

  obtainDataProject():Observable<any>{
    return this.http.get(this.url + 'project/list');
  }

  obtainDataSkills():Observable<any>{
    return this.http.get(this.url + 'technologies/list');
  }

  obtainDataCategories():Observable<any>{
    return this.http.get(this.url + 'categories/list');
  }

  obtainDataMedia():Observable<any>{
    return this.http.get(this.url + 'media/list');
  }

}

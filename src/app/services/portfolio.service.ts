import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  // url:string="http://jfkdfnlkjsf/api"
  constructor(private http:HttpClient) { }

  obtainData():Observable<any>{
    return this.http.get('./assets/data/data.json');
    // return this.http.get<any>(this.url+"persona");
  }
}

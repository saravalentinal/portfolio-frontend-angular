import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  url="http://npinti.ddns.net:9008/api/auth/login";
  currentUserSubject: BehaviorSubject<any>;

  constructor( private http:HttpClient ) {
    console.log("El servicio de autenticación está corriendo");
    this.currentUserSubject = new BehaviorSubject<any>(JSON.parse(sessionStorage.getItem('currentUser') || '{}'));
   }

   LogIn(credencials:any):Observable<any> {
    return this.http.post(this.url, credencials).pipe(map(data=>{
      sessionStorage.setItem('currentUser', JSON.stringify(data));
      return data;
    }))
   }

   get AuthUser() {
    return this.currentUserSubject.value;
   }
}

import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService {

  constructor(private authService:AuthService) { }

  Intercept(req: HttpRequest<any>, next:HttpHandler): Observable<HttpEvent<any>>{
    let currentUser = this.authService.AuthUser;
    if(currentUser && currentUser.accesToken){
      req = req.clone({
        setHeaders: {
          Authorization: `Bearer ${currentUser.accessToken}`
        }
      })
    }
    console.log("Interceptor está corriendo" + JSON.stringify(currentUser));
    return next.handle(req);
  }
}

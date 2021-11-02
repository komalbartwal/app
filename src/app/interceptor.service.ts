import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    req = req.clone({ headers: req.headers.append('Content-Type', 'application/json') });
    req = req.clone({ headers: req.headers.append('Access-Control-Allow-Origin', '*') });
    req = req.clone({ headers: req.headers.append('Access-Control-Allow-Headers', '*') });
    req = req.clone({ headers: req.headers.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE') });
    req = req.clone({ headers: req.headers.append('Authorization', 'Basic bmF6aW1AbmltYXBpbmZvdGVjaC5jb206dGVzdEAxMjM=') });
    
    return next.handle(req);
  }

  constructor() { }
}

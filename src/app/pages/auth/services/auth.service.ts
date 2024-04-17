import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: "root"
})
export class AuthService {
  constructor(private http: HttpClient) {}

  postRequestUser(route: string, data:any){
    let config: any = {
      responseType: "json"
    };
    
    const header = new HttpHeaders().set('Authorization', '57ydf544ljka559ahjkfgd1');
    config["header"] = header;
    return this.http.post(route, data, config);
  }

  verifyLogin() {
    return new Observable<boolean>(observer => {
      setInterval(() => {
        localStorage.getItem("token") ? observer.next(true) : observer.next(false);
      }, 1000);
    });
  }
}
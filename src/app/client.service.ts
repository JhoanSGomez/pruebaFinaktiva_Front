import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http: HttpClient) { }

  //metodo que recibe como parametro una url un json a ser enviado. Esta solicitud se hace con metodo POST
  //en este caso el json proviene de los datos de un formulario.
  postRequestEvent(route: string, data: any) {
    let config: any = {
      responseType: 'json',
    }

    const header = new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('token')}`);
    config["headers"] = header;

    return this.http.post(route, data, config);

  }

  getWallet(route: string, data: any) {
    let config: any = {
      responseType: "json"
    }
    const header = new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('token')}`);
    config["headers"] = header;

    return this.http.get(route, config);
  }
}
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Plazo } from 'src/app/interfaces/plazo';

@Injectable({
  providedIn: 'root'
})
export class PlazoService {

  url:string = "http://localhost:5000/plazo";

  constructor(private HttpClient: HttpClient) { }

  obtenerPlazos():Observable<Plazo[]>{
    return this.HttpClient.get<Plazo[]>(`${this.url}`);
  }

  registrarPlazo(plazo: Plazo){
    return this.HttpClient.post(this.url, plazo);
  }
}

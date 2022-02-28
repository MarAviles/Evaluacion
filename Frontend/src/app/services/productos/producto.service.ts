import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Producto } from 'src/app/interfaces/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  url:string = "http://localhost:5000/producto";

  constructor(private HttpClient: HttpClient) { }

  obtenerProductos():Observable<Producto[]>{
    return this.HttpClient.get<Producto[]>(`${this.url}`);
  }

  registrarProducto(producto: Producto){
    return this.HttpClient.post(this.url+'/guardar', producto);
  }

  obtenerProducto(id: number):Observable<Producto>{
    console.log(id); 
    return this.HttpClient.get<Producto>(this.url+'/'+id)
  }

  eliminarProducto(id: number):Observable<Object>{
    return this.HttpClient.delete(this.url+'/eliminar/'+id)
  }

  editarProducto(idProducto:number, nombre:string, precio:number){
    let obj = {nombre, precio}
    console.log(obj)
    return this.HttpClient.put(this.url+'/editar/'+idProducto,obj)
  }

  buscarPalabra(palabra: string){
    let searchParams = new HttpParams();
    searchParams = searchParams.append('query', palabra);
    return this.HttpClient.post(this.url+'/search/', searchParams);
  }


}

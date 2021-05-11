import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { observable, Observable } from 'rxjs';
import { Productos } from '../model/productos';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  url = 'http://localhost:4000/api/productos/';
  constructor( private http: HttpClient) { }

  getProductos(): Observable<any>{
    return this.http.get(this.url)
  }


  eliminarProductos(id: string): Observable<any> {

    return this.http.delete(this.url+id);

  }

  guardarproducto(productos : Productos): Observable<any>{
  return this.http.post(this.url,productos);
  }

  obtenerproductos(id: string): Observable<any>{
    return this.http.get(this.url+id);

  }
}

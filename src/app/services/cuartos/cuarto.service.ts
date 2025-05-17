import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Cuarto } from '../../models/cuarto';

@Injectable({
  providedIn: 'root'
})
export class CuartoService {
  constructor(private http: HttpClient) { }

  public createCuarto(cuarto: Cuarto):  Observable<any>{
    return this.http.post(environment.apiUrl + "cuartos", {cuarto});
  }
  
  public getCuartos(): Observable<any> {
    return this.http.get(environment.apiUrl + "cuartos");
  }
  
  public filterByPropiedad(idPropiedad: number): Observable<any> {
    return this.http.get(environment.apiUrl + `propiedades/${idPropiedad}/cuartos`);
  }

  public getCuarto(id: number): Observable<any> {
    return this.http.get(environment.apiUrl + `cuartos/${id}`);
  }

  public deleteCuarto(id: number): Observable<any> {
    return this.http.delete(environment.apiUrl + `cuartos/${id}`);
  }

  public updateCuarto(cuarto: Cuarto): Observable<any> {
    return this.http.put(environment.apiUrl + `cuartos/${cuarto.getId()}`, {cuarto});
  }

}

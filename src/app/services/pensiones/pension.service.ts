import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Pension } from '../../models/pension';

@Injectable({
  providedIn: 'root'
})
export class PensionService {

  constructor(private http: HttpClient) { }
  

  public createPension(pension: Pension): Observable<any> {
    return this.http.post(environment.apiUrl + "propiedades", {pension});
  }

  public filterByPropietario(idPropietario: number): Observable<any> {
    return this.http.get(environment.apiUrl + `propietarios/${idPropietario}/propiedades`);
  }

  public getPensiones(): Observable<any> {
    return this.http.get(environment.apiUrl + "propiedades");
  }

  public getPension(id: number): Observable<any>  {
    return this.http.get(environment.apiUrl + `propiedades/${id}`);
  }
  
  public updatePension(pension: Pension): Observable<any> {
    return this.http.put(environment.apiUrl + `propiedades/${pension.id}`, {pension});
  }

  public deletePension(id: number): Observable<any>  {
    return this.http.delete(environment.apiUrl + `propiedades/${id}`);
  }

  public filtrarPensiones(tipoSeleccionado: string, barrioSeleccionado: string, precioMinimo: number, precioMaximo: number, cupoCompleto:boolean, ambienteFamiliar: boolean, individual: boolean, aire: boolean): Observable<any> {
    return this.http.get(environment.apiUrl +  `propiedades/${tipoSeleccionado}/${barrioSeleccionado}/${precioMinimo}/${precioMaximo}/${cupoCompleto}/${ambienteFamiliar}/${individual}/${aire}`);
  }
}



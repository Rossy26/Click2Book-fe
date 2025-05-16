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
    return this.http.post(environment.apiUrl + "pensiones", {pension});
  }

  public filterByPropietario(idPropietario: number): Observable<any> {
    return this.http.get(environment.apiUrl + `propietario/pensiones/${idPropietario}`);
  }

  public getPensiones(): Observable<any> {
    return this.http.get(environment.apiUrl + "pensiones");
  }

  public getPension(id: number): Observable<any>  {
    return this.http.get(environment.apiUrl + `pensiones/${id}`);
  }
  
  public updatePension(pension: Pension): Observable<any> {
    return this.http.put(environment.apiUrl + `pensiones/${pension.getId()}`, {pension});
  }

  public deletePension(id: number): Observable<any>  {
    return this.http.delete(environment.apiUrl + `pensiones/${id}`);
  }
}

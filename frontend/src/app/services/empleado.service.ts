import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Empleado } from '../interfaces/Empleado';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  URI = 'http://localhost:3000'

  constructor(private _http: HttpClient) { }

  mostrarTodos() {
    return this._http.get<Empleado[]>(this.URI);
  }

  mostrarEmpleado(id: string): Observable<any> {
    return this._http.get<Empleado>(`${this.URI}/${id}`);
  }

  eliminarEmpleado(id: string): Observable<any> {
    return this._http.delete(`${this.URI}/${id}`);
  }

  nuevoEmpleado(empleado: Empleado): Observable<Empleado> {
    return this._http.post<Empleado>(`${this.URI}`, empleado);
  }

  actualizarEmpleado(id: string, empleado: Empleado): Observable<any> {
    return this._http.put(`${this.URI}/${id}`, empleado);
  }
}

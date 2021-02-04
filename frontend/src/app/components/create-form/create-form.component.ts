import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmpleadoService } from 'src/app/services/empleado.service';
import * as moment from 'moment';

import { Empleado } from 'src/app/interfaces/Empleado';


@Component({
  selector: 'app-create-form',
  templateUrl: './create-form.component.html',
  styleUrls: ['./create-form.component.scss']
})
export class CreateFormComponent implements OnInit {

  empleado: Empleado = {
    _id: '',
    nombre: '',
    apellido_p: '',
    apellido_m: '',
    sexo: '',
    fecha_nac: new Date,
    estado_civil: '',
    nacionalidad: '',
    area: ''
  };

  estadoCivil = [
    { 'estado': 'Soltero(a)' },
    { 'estado': 'Casado(a)' },
    { 'estado': 'Viudo(a)' },
    { 'estado': 'Divorciado(a)' },
    { 'estado': 'Juntado(a)' }
  ];

  nacionalidades = [
    { 'nombre': 'Mexicana' },
    { 'nombre': 'Colombiana' },
    { 'nombre': 'Estadounidense' },
    { 'nombre': 'Peruana' },
    { 'nombre': 'Argentina' }
  ];

  areas = [
    { 'areaId': '00001' },
    { 'areaId': '00100' },
    { 'areaId': '00101' },
    { 'areaId': '10000' }
  ];

  sexos = [
    { 'nombre': 'Masculino' },
    { 'nombre': 'Femenino' }
  ];

  modificar: boolean = false;

  constructor(
    private _empleadoService: EmpleadoService,
    private _router: Router,
    private _activatedRouter: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const params = this._activatedRouter.snapshot.params;
    if (params.id) {
      this._empleadoService.mostrarEmpleado(params.id)
        .subscribe(
          res => {
            console.log('Empleado: ', res);
            this.empleado = res;
            this.modificar = true;
          },
          err => console.log(err)
        );
    }
  }

  guardarEmpleado() {
    delete this.empleado._id;

    console.log(this.empleado);

    this._empleadoService.nuevoEmpleado(this.empleado)
      .subscribe(
        res => {
          console.log(res);
          this._router.navigate(['/todos']);
        },
        err => console.log(err)
      );
  }

  actualizarEmpleado() {
    this._empleadoService.actualizarEmpleado(this.empleado._id, this.empleado)
      .subscribe(
        res => {
          console.log(res);
          this._router.navigate(['/todos']);
        },
        err => console.log(err)
      );
  }

}

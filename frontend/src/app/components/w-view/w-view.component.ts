import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Empleado } from 'src/app/interfaces/Empleado';
import { EmpleadoService } from 'src/app/services/empleado.service';

@Component({
  selector: 'app-w-view',
  templateUrl: './w-view.component.html',
  styleUrls: ['./w-view.component.scss']
})
export class WViewComponent implements OnInit {

  id: string;
  empleado: Empleado;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _empleadoService: EmpleadoService,
    private _router: Router
  ) { }

  ngOnInit(): void {
    this._activatedRoute.params.subscribe(params => {
      this.id = params['id'];
      this._empleadoService.mostrarEmpleado(this.id)
        .subscribe(
          res => {
            this.empleado = res;
          },
          err => console.log(err)
        );
    });
  }

  eliminarEmpleado(id: string) {
    this._empleadoService.eliminarEmpleado(id)
      .subscribe(res => {
        console.log(res);
        this._router.navigate(['/todos']);
      });
    return false;
  }

  editarEmpleado(id: string) {
    this._router.navigate(['/nuevo', id]);
  }

}

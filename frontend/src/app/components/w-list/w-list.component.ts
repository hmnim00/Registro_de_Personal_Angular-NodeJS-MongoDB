import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Empleado } from 'src/app/interfaces/Empleado';
import { EmpleadoService } from 'src/app/services/empleado.service';

@Component({
  selector: 'app-w-list',
  templateUrl: './w-list.component.html',
  styleUrls: ['./w-list.component.scss']
})
export class WListComponent implements OnInit {

  empleados: Empleado[] = [];

  constructor(private _empleadoService: EmpleadoService, private _router: Router) { }

  ngOnInit(): void {
    this._empleadoService.mostrarTodos()
      .subscribe(
        res => {
          console.log(res);
          this.empleados = res;
        },
        err => console.log(err)
    )
  }

  empleadoSeleccionado(id: string) {
    this._router.navigate(['/empleado', id]);
  }

}

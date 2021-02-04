import express, { Router } from 'express';

// Control empleado
import { controlEmpleado } from '../controllers/Empleado';

class Rutas {
  router: Router = express();

  constructor() {
    this.rutas();
  }

  rutas(): void {
    this.router.get('/', controlEmpleado.mostrarTodos);
    this.router.post('/', controlEmpleado.agregarNuevo);
    this.router.delete('/:id', controlEmpleado.eliminarEmpleado);
    this.router.get('/:id', controlEmpleado.mostrarEmpleado);
    this.router.put('/:id', controlEmpleado.actualizarEmpleado);
  }
}

const rutas = new Rutas();
export default rutas.router;
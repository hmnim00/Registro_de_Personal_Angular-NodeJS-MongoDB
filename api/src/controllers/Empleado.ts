import { Request, Response } from 'express';
import Empleado from '../models/Empleado';

class ControlEmpleado {
  // Agregar empleado
  async agregarNuevo(req: Request, res: Response): Promise<Response> {
    const nuevo = req.body;
    try {
      const empleado = new Empleado(nuevo);
      await empleado.save();
      return res.status(200).json({ message: 'Empleado registrado con éxito' });
    } catch (error) {
      return res.status(400).json({ message: 'Error al ingresar los datos' });
    }
  }
  // Mostrar todos
  async mostrarTodos(req: Request, res: Response): Promise<Response> {
    try {
      const empleados = await Empleado.find();
      return res.status(202).json(empleados);
    } catch (error) {
      return res.status(404).json({ message: 'No se encontraron registros' });
    }
  }
  // Eliminar empleado
  async eliminarEmpleado(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params;
      await Empleado.findByIdAndRemove(id);
      return res.status(202).json({ message: 'Empleado eliminado de la base de datos con éxito' });
    } catch (error) {
      return res.status(404).json({ message: 'Empleado no encontrado' });
    }
  }
  // Mostrar unico registro
  async mostrarEmpleado(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params;
      const empleado = await Empleado.findById(id);
      return res.status(200).json(empleado);
    } catch (error) {
      return res.status(404).json({ message: 'Empleado no encontrado' });
    }
  }
  // Actualizar registro
  async actualizarEmpleado(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params;
      const empleado = req.body;
      await Empleado.findByIdAndUpdate(id, empleado, { new: true });
      return res.status(200).json({ message: 'Datos del empleado actualizados correctamente' });
    } catch (error) {
      return res.status(404).json({ message: 'Empleado no encontrado' });
    }
  }
}

export const controlEmpleado = new ControlEmpleado();
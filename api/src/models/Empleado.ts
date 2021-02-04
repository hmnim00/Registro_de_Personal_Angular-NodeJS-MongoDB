import { Schema, model, Document } from 'mongoose';

const schema = new Schema({
  nombre: String,
  apellido_p: String,
  apellido_m: String,
  sexo: String,
  fecha_nac: Date,
  estado_civil: String,
  nacionalidad: String,
  fecha_alta: { type: Date, default: Date.now },
  area: String
});

interface IEmpleado extends Document {
  apellido_p: string,
  apellido_m: string,
  sexo: string,
  fecha_nac: Date,
  estado_civil: string,
  nacionalidad: string,
  fecha_alta: Date,
  area: string
}

export default model<IEmpleado>('Empleado', schema);
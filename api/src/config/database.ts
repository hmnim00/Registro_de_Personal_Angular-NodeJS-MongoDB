import mongoose, { connect } from 'mongoose';

export async function comenzarConexion() {
  await connect('mongodb://localhost/rh_sistema', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true
  })
    .then(db => console.log('Conexión exitosa con la base de datos'))
    .catch(err => console.log(err))
}
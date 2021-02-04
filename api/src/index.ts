import app from './config/app';
import { comenzarConexion } from './config/database';

async function main() {
  comenzarConexion();
  await app.listen(app.get('port'));
  console.log(`Servidor activo en el puerto: ${app.get('port')}`);
}

main();
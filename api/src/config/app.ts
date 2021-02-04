import express, { Application, json } from 'express';
import morgan from 'morgan';
import cors from 'cors';

import Rutas from '../routes/index.routes';

// init
const app: Application = express();

// ajustes
app.set('port', process.env.PORT || 3000);

// middlewares
app.use(express.json());
app.use(morgan('dev'));
app.use(cors());

// rutas
app.use('/', Rutas);

// plublico

export default app;
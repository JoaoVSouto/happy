import path from 'path';
import express from 'express';
import cors from 'cors';

import 'express-async-errors';

import './database/connection';

import routes from './routes';

import errorHandler from './errors/handler';

const app = express();

app.use(cors());
app.use(express.json());
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')));

app.use(routes);

app.use(errorHandler);

const PORT = 3333;
app.listen(PORT, () => console.log(`Server listening on ${PORT}...`));

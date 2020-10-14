import 'express-async-errors';

import path from 'path';

import express, { Express } from 'express';
import helmet from 'helmet';
import cors from 'cors';

import './database/connection';

import routes from './routes';
import errorHandler from './errors/handler';

class App {
  public readonly server: Express;

  constructor() {
    this.server = express();

    this.middlewares();
    this.routes();
    this.exceptionHandler();
  }

  private middlewares() {
    this.server.use(helmet());
    this.server.use(cors());
    this.server.use(express.json());
    this.server.use(
      '/uploads',
      express.static(path.join(__dirname, '..', 'uploads'))
    );
  }

  private routes() {
    this.server.use(routes);
  }

  private exceptionHandler() {
    this.server.use(errorHandler);
  }
}

export default new App().server;

import 'dotenv/config';

import express from 'express';
import routes from './routes';

import './database';

class App {
  constructor() {
    this.server = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    // Aplicação apta à receber requisições no formato JSON
    this.server.use(express.json());
  }

  routes() {
    // Importando as rotas do arquivo routes.js
    this.server.use(routes);
  }
}

export default new App().server;

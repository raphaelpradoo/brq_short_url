import Router from 'express';

import SiteController from './app/controllers/SiteController';
import StatsController from './app/controllers/StatsController';

const routes = new Router();

// Rota para o exercicio 1)
routes.post('/site', SiteController.create);

// Rota para o exercicio 2)
routes.get('/stats', StatsController.index);

export default routes;

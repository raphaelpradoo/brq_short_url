import Router from 'express';

import SiteController from './app/controllers/SiteController';

const routes = new Router();

// Sites
routes.post('/site', SiteController.create);

export default routes;

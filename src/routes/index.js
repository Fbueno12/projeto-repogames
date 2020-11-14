import Router from 'express';
import { root } from '../config/configurations.js';

import assets from './assets-routes.js';

const routes = Router();

routes.use(assets);

routes.get("/", (request, response) => {
    response.sendFile('./views/home.html', { root });
});

export default routes;
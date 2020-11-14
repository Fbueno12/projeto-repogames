import Router from 'express';
import { root } from '../config/configurations.js';

const routes = Router();

routes.get("/global.css", (request, response) => {
    response.sendFile(root + "/assets/global.css");
});

export default routes;
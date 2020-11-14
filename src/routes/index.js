import Router from 'express';

const routes = Router();

routes.get("/", (request, response) => {
    response.send("to dentro do arquivo de rotas");
});

export default routes;
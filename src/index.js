import express from 'express';
import routes from './routes/index.js';

import path from 'path';
const root = path.resolve("./src");

const app = express();

app.use(routes);

app.get("/testeTemplate", (request, response) => {
    response.sendFile('./views/home.html', { root });
});

app.listen(8080, () => {
    console.log("Repogames iniciado com sucesso na porta 8080\nlink: http://localhost:8080/");
});
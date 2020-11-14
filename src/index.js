import express from 'express';
import routes from './routes/index.js';
import { root } from './config/configurations.js';

const app = express();

app.use(routes);

app.get("/testeTemplate", (request, response) => {

});

app.listen(8080, () => {
    console.log("Repogames iniciado com sucesso na porta 8080\nlink: http://localhost:8080/");
});
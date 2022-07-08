import express, { Request, Response, NextFunction } from "express";
import { users } from "./routes/index"

const server = express();

server.use(express.json());

server.use(express.urlencoded({ extended: true }));

server.disable('x-powered-by');

server.use((request, response, next) => {
    response.set({
        'Access-Control-Allow-Origin': '*'
    })
    next()
})

server.use('/public', express.static('public')); // liberar acesso aos documentos em public

server.use('/api/v1/users', users.default);

server.use(async (request: Request, response: Response, next: NextFunction) => {
    next(response.status(400).json({ error: 'Router do not exists' }));
}); // caso nenhuma rota responda

export default server;
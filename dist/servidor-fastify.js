"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_1 = __importDefault(require("fastify"));
const servidor = (0, fastify_1.default)({
    logger: true
});
servidor.get('/teste', (req, res) => {
    return res.send('Olá, esse é o meu primeiro servidor');
});
servidor.listen({
    port: 3000
});

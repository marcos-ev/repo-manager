"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.importRepos = void 0;
const database_1 = require("../config/database");
const messageProducer_1 = __importDefault(require("../utils/messageProducer"));
const importRepos = async (req, res) => {
    const repos = req.body;
    try {
        const conn = await (0, database_1.getConnection)();
        // Inserir todos os repositórios na tabela
        for (const repo of repos) {
            await conn.query('INSERT INTO repos (id, name, owner, stars) VALUES (?, ?, ?, ?)', [repo.id, repo.name, repo.owner, repo.stars]);
        }
        // Enviar os dados para a fila RabbitMQ
        await (0, messageProducer_1.default)(repos);
        // Responder ao frontend indicando que os dados foram recebidos com sucesso
        res.status(200).send({ message: 'Repositórios importados com sucesso. Processando em segundo plano.' });
    }
    catch (error) {
        console.error(error);
        res.status(500).send({ message: 'Erro ao importar repositórios.' });
    }
};
exports.importRepos = importRepos;

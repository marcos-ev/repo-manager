"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.importRepos = void 0;
const database_1 = require("../config/database");
const messageProducer_1 = __importDefault(require("../utils/messageProducer"));
const importRepos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const repos = req.body;
    try {
        const conn = yield (0, database_1.getConnection)();
        // Inserir todos os repositórios na tabela
        for (const repo of repos) {
            yield conn.query('INSERT INTO repos (id, name, owner, stars) VALUES (?, ?, ?, ?)', [repo.id, repo.name, repo.owner, repo.stars]);
        }
        // Enviar os dados para a fila RabbitMQ
        yield (0, messageProducer_1.default)(repos);
        // Responder ao frontend indicando que os dados foram recebidos com sucesso
        res.status(200).send({ message: 'Repositórios importados com sucesso. Processando em segundo plano.' });
    }
    catch (error) {
        console.error(error);
        res.status(500).send({ message: 'Erro ao importar repositórios.' });
    }
});
exports.importRepos = importRepos;

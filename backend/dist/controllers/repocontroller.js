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
Object.defineProperty(exports, "__esModule", { value: true });
exports.importRepos = void 0;
const database_1 = require("../config/database");
const importRepos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const repos = req.body;
    try {
        const conn = yield (0, database_1.getConnection)();
        // Inserir todos os repositórios na tabela
        for (const repo of repos) {
            yield conn.query('INSERT INTO repos (id, name, owner, stars) VALUES (?, ?, ?, ?)', [repo.id, repo.name, repo.owner, repo.stars]);
        }
        res.status(200).send({ message: 'Repositórios importados com sucesso.' });
    }
    catch (error) {
        console.error(error);
        res.status(500).send({ message: 'Erro ao importar repositórios.' });
    }
});
exports.importRepos = importRepos;

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const repocontroller_1 = require("../controllers/repocontroller");
const router = express_1.default.Router();
// Rota para verificar se a API está funcionando
router.get('/api', (req, res) => {
    res.status(200).send('API is working');
});
// Rota para importar repositórios
router.post('/repos/import', repocontroller_1.importRepos);
exports.default = router;

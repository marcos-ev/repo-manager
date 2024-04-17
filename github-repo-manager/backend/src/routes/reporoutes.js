"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var repocontroller_1 = require("../controllers/repocontroller");
var router = express.Router(); // Correção aplicada aqui para usar diretamente express.Router().

// Rota para importar repositórios
router.post('/repos/import', repocontroller_1.importRepos);
exports.default = router;

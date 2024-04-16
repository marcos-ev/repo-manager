"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
const repocontroller_1 = require("../controllers/repocontroller");
const router = express.Router();
// Rota para importar repositórios
router.post('/repos/import', repocontroller_1.importRepos);
exports.default = router;

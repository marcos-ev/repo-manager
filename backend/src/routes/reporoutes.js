"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var repocontroller_1 = require("../controllers/repocontroller");
var router = express_1.default.Router();
// Rota para importar repositórios
router.post('/repos/import', repocontroller_1.importRepos);
exports.default = router;

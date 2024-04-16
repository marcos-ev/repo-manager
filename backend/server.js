"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var body_parser_1 = require("body-parser");
var cors_1 = require("cors");
var reporoutes_1 = require("./src/routes/reporoutes");
var app = (0, express_1.default)();
var PORT = process.env.PORT || 3001;
app.use((0, cors_1.default)());
app.use(body_parser_1.default.json());
// Usar as rotas definidas no arquivo repoRoutes.ts
app.use('/api', reporoutes_1.default);
app.listen(PORT, function () {
    console.log("Server is running on port ".concat(PORT));
});

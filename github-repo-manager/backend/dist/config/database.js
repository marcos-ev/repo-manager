"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getConnection = void 0;
const mariadb_1 = require("mariadb");
const pool = (0, mariadb_1.createPool)({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'github_repos',
    connectionLimit: 5
});
const getConnection = async () => {
    return await pool.getConnection();
};
exports.getConnection = getConnection;

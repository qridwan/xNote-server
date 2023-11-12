"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const knex_1 = __importDefault(require("knex"));
require("dotenv").config();
/**
 * @description This file contains the initialization of knex instance
 */
const config = {
    client: "mysql2",
    connection: {
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
    },
};
const client = (0, knex_1.default)(config);
exports.default = client;
//# sourceMappingURL=knex.js.map
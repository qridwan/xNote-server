import knex, { Knex } from "knex";
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
const client: Knex = knex(config as Knex.Config);

export default client;

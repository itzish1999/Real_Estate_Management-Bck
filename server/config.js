const { Pool } = require("pg");
const dotenv = require("dotenv");

const result = dotenv.config();

if (result.error) {
    throw result.error;
}

const { parsed: envs } = result;
console.log(envs);

const PORT = process.env.PORT || 54322
const pool = new Pool({
    host: process.env.PGHOST,
    user: process.env.PGUSER,
    database: process.env.PGDATABASE,
    password: process.env.PGPASSWORD,
    port: process.env.PGPORT
});

module.exports = { envs, pool, PORT };
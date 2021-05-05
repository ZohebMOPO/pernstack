const Pool = require('pg').Pool;

require('dotenv').config();

var user = process.env.USER;
var pass = process.env.PASS;


const pool = new Pool({
    user: user,
    password: pass,
    host: "localhost",
    port: "5432",
    database: "docs"
})

module.exports = pool;
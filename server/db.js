const Pool = require('pg').Pool;

require('dotenv').config();

var user = process.env.USER;
var pass = process.env.PASS;
var p = process.env.PORT;

const pool = new Pool({
    user: user,
    password: pass,
    host: "localhost",
    port: p,
    database: "docs"
})

module.exports = pool;
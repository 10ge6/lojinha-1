const dotenv = require('dotenv');
const sql = require('mysql2');

dotenv.config();

var pool = sql.createPool({
    "port": Number(process.env.SQL_PORT),
    "host": process.env.SQL_HOST,
    "user": process.env.SQL_USER,
    "password": process.env.SQL_PWD,
    "database": process.env.SQL_DB
});

exports.pool = pool;
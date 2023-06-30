const { Pool } = require('pg');
const mysql = require('mysql');

class db {
    constructor() {
        this.pool = new Pool({
            host: '#####',
            user: '#####',
            password: '#####',
            port: 666,
            database: '#####'
        });
        
        this.connection = mysql.createConnection({
            host: '#####',
            user: '#####',
            password: '#####',
            database: '#####'
        });
    }
    bringPool() {
        return this.pool;
    }
    bringCon() {
        return this.connection;
    }
}
module.exports = db;

var mysql = require('promise-mysql');

function createDBConnection(){
    return mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'payfast'
    })
}

const con = createDBConnection();

module.exports = con;

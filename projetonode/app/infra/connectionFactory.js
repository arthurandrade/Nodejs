var mysql = require('mysql');

function createDBConnection() {
     /*return mysql.createConnection({
         host: 'localhost',
         user: 'root',
         password: 'root',
         database: 'casadocodigo_nodejs'
     });*/
     console.log(process.env.NODE_ENV);
     if(!process.env.NODE_ENV ||process.env.NODE_ENV === 'production') {
        return mysql.createConnection({
                host:'localhost',
                user:'root',
                password:'root',
                database:'casadocodigo_nodejs'
        });
    } else {
        return mysql.createConnection({
                host:'localhost',
                user:'root',
                password:'root',
                database:'casadocodigo_nodejs_test'
        });
    }
}

//wrapper
module.exports = function() {
  return createDBConnection;
}

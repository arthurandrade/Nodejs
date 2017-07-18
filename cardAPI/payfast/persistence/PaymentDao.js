var connection = require('./connectionFactory')();

/* function PaymentDao(connection) {
    this._connection = connection;
} */

function PaymentDao() {
}

PaymentDao.prototype = {
    salve : function(payment) {
        return connection().then(function(con){
            return con.query('INSERT INTO payment SET ?', payment);
        });
    },
    update: function(payment) {
        return connection().then(function(con){
            return con.query('UPDATE payment SET status = ? where id = ?', [payment.status, payment.id]);
        });
    },
    list : function() {
        return connection().then(function(con){
            return con.query('select * from payment');
        })
    },
    searchID : function (id) {
        return connection().then(function(con){
            return con.query("select * from payment where id = ?",[id]);
        })
    }
}

module.exports = function(){
    return PaymentDao;
};

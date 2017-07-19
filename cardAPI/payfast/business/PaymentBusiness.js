var PaymentDao = require('../persistence/PaymentDao')();
var cardClient = require("../service/cardClient");
var Promise = require('promise');


function PaymentBusiness(app) {
    this._app = app;
}

PaymentBusiness.prototype = {
    list: function() {
        return new PaymentDao().list();
    },
    update: function(payment) {   
        return new PaymentDao().update(payment).then(() => this.searchID(payment.id));
    },
    searchID: function(id) {   
        return new PaymentDao().searchID(id);
    },
    processesPayment: function(data) {
        if(data.card) {
           return validCard(data.card).then(function(teste){
               return new PaymentDao().salve(data.payment)
           })
        }
        return new PaymentDao().salve(data.payment);
    }
}

function validCard(card){
    return new Promise(function (fulfill, reject) {
        cardClient().authorize(card,function(err,res){
             if (err) reject(err);
             else fulfill(res);
        });
    });
}

module.exports = function(){
    return PaymentBusiness;
}

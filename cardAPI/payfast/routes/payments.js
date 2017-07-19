var Promise = require('promise');

module.exports = function(app) {
    app.get('/payments', function(req, res){
        var paymentBusiness = new app.business.PaymentBusiness(app);
        paymentBusiness.list().then(function(payments) {             
            res.status(200).send(payments);
        });   
    });
    
    app.delete('/payments/payment/:id', function(req, res){
        var payment = {};
        payment.id = req.params.id;
        payment.status = 'CANCELED';
        var paymentBusiness = new app.business.PaymentBusiness(app);
        paymentBusiness.update(payment)                 
          .then(function(result) {
            console.log(result);
            res.status(200).json(result);
        });
        
  });

  app.get('/payments/payment/:id', function(req, res) {

        var paymentBusiness = new app.business.PaymentBusiness(app);
        paymentBusiness.searchID(req.params.id)
        .then(function(result){
            res.status(200).send(result);
        });
  });

  app.post('/payments/payment', function(req, res) {
       
    var data = req.body
    data.payment.status = 'CREATED';
    data.payment.date = new Date;
    var paymentBusiness = new app.business.PaymentBusiness(app);
    paymentBusiness.processesPayment(data).then(function(result){
      data.payment.id = result.insertId;         
      buildResponse(data, res);
    });
  });

  function buildResponse (data, res) {
    var response = {
      dados_do_pagamanto: data.payment,
      card: data.card,
      links: [
        {
          href:"http://localhost:3000/pagamentos/pagamento/" + data.payment.id,
          rel:"confirmar",
          method:"PUT"
        },
        {
          href:"http://localhost:3000/pagamentos/pagamento/" + data.payment.id,
          rel:"cancelar",
          method:"DELETE"
        }
      ]
    }
    return res.status(201).send(response);
  };
}

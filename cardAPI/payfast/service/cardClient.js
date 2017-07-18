var restify = require('restify-clients');

function CartoesClient(){
  this._cliente = restify.createJsonClient({
    url:'http://localhost:3002'
  });
}

CartoesClient.prototype.authorize = function(cartao, callback){
  this._cliente.post('/cartoes/autoriza', cartao , callback);
}

module.exports = function(){
  return new CartoesClient();
}

var restify = require('restify-clients');

function CartoesClient(){
  this._client = restify.createJsonClient({
    url:'http://localhost:3001'
  });
}

CartoesClient.prototype.authorize = function(card, callback){
  this._client.post('/cartoes/autoriza', card, callback);
}

module.exports = function(){
  return new CartoesClient();
}

var http = require('http');

var configuracoes = {
  hostname: 'localhost',
  port: 3000,
  path: '/produtos',
  method: 'post',
  headers: {
    'Accept': 'application/json',
    'Content-type': 'application/json'
  }
};

var client = http.request(configuracoes, function(res) {
  console.log(res.statusCode);
  res.on('data', function(body){
    console.log("body" +body);
  });
});

var produto = {
  titulo: 'mas sobre node.',
  descricao: 'node, js e um pouco sobre http',
  preco: 'gd'
};

client.end(JSON.stringify(produto));

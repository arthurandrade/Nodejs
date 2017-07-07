
module.exports = function(app) {
    var listaProdutos = function(req, res) {
      var connection = app.infra.connectionFactory();
      var produtosDAO = new app.infra.ProdutosDAO(connection);

      produtosDAO.lista(function(erros, resultados) {
        res.format({
          html: function() {
            res.render('produtos/lista',{lista:resultados});
          },
          json: function() {
            res.json(resultados);
          }
        });

      });
      connection.end();
    };

    app.get('/produtos', listaProdutos);

    app.get('/produtos/form', function(req, res) {
      res.render('produtos/form',{errosValidacao: {}});
    });

    app.post('/produtos', function(req, res) {
      var produto = req.body;

      req.assert('titulo','Titulo é obrigatório').notEmpty();
      req.assert('preco','Formato inválido').isFloat();
      var erros = req.validationErrors();
      if(erros){
        res.render('produtos/form',{errosValidacao: erros});
        return;
      }

      var connection = app.infra.connectionFactory();
      var produtosDAO = new app.infra.ProdutosDAO(connection);
      produtosDAO.salva(produto, function(erros, resultados) {
        res.redirect('/produtos');
      });
    });

    app.get('produtos/remove', function() {
      var produto = produtosBanco.carrega(id, callback);
      if(produto) {
        produtosBanco.remove(connection, produto, callback)
      }
    });
}

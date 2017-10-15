const express = require('express');

var app = express();

app.get('/', (req, res) => {
    res.send('Hello world!');
});

app.get('/users', (req, res) => {
    res.send([{
        name:'Arthur',
        age:27
    }, {
        name:'Lucas',
        age:24
    }, {
        name:'Joao',
        age:22
    }]);
});

app.listen(3000);

module.exports.app = app;
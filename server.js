const express = require('express');
const app = express();
const hbs = require('hbs');

require('./hbs/helpers/helpers');


app.use(express.static(__dirname + '/public'));

// Express hbs engine
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');


app.get('/about', (req, res) => {
    res.render('about');
});


app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'Joaquin'
    });
});




app.listen(8080, () => {
    console.log('Recibiendo peticiones en el puerto 8080');
})
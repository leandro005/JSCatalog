const express = require('express');
const morgan = require('morgan');
const path = require('path');
const cors = require('cors');
const { mongoose } = require('./database');

//Initializations
const app = express();

//Settings
app.set('port', process.env.PORT || 3000);
//app.set('views');

//Middleware
app.use(morgan('dev'));
app.use(express.json());
app.use(cors());

//Routes
app.use('/api/catalogos',require('../src/routes/catalogo.routes'));
//app.use(express.path(path.()));

//Static files
app.use(express.static(path.join(__dirname, 'public')));

//Server listening
app.listen( app.get('port') , () => {
    console.log(`servidor escuchando puerto ${app.get('port')}` );
});

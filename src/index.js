const express = require('express');
const morgan = require('morgan');
const path = require('path');
const conection = require('mongoose');


//Initializations
const app = express();

//Settings
app.set('port', process.env.PORT || 3000);
//app.set('views');

//Middleware
app.use(morgan('dev'));
app.use(express.json());

//Routes
app.use('/api/catalogos',require('../src/routes/catalogo.routes'));
//app.use(express.path(path.()));

//Databse conn
conection.connect('mongodb+srv://elektro:Elektro05@cluster0.watzr.mongodb.net/catalogos?retryWrites=true&w=majority', {
    useCreateIndex: true,
    useNewUrlParser: true
})
  .then(db => console.log('La DB esta funcandoo en el indexxx!!!!'))
  .catch(err => console.log(err));

//Static files
app.use(express.static(path.join(__dirname, 'public')));

//Server listening
app.listen( app.get('port') , () => {
    console.log(`servidor escuchando puerto ${app.get('port')}` );
});

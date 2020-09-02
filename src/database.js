const conection = require('mongoose');

conection.set('useFindAndModify', false);
conection.connect('mongodb+srv://elektro:Elektro05@cluster0.watzr.mongodb.net/catalogos?retryWrites=true&w=majority', {
    useCreateIndex: true,
    useNewUrlParser: true
})
  .then(db => console.log('La DB esta funcandoo!!!!'))
  .catch(err => console.log(err));



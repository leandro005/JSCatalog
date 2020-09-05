const mongoose = require('mongoose');
const DB_URI = 'mongodb+srv://elektro:Elektro05@cluster0.watzr.mongodb.net/catalogos?retryWrites=true&w=majority';

mongoose.set('useFindAndModify', false);
mongoose.connect( DB_URI, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true
})
  .then(db => console.log('La DB esta funcandoo en database.js !!!!'))
  .catch(err => console.log(err));

module.exports = mongoose;

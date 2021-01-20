const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');

const app = express();
mongoose.connect('mongodb+srv://david:temporal01@cluster0.4wdun.mongodb.net/pruebas?retryWrites=true&w=majority')
    .then(db => console.log('BD conectada'))
    .catch(err => console.error(err));

//Settings
app.set('port', 3000);

//Middleware
app.use(morgan('dev'));
app.use(express.json());

//Routes
app.use('/tasks', require('./router/tasks'));

//Static files
app.use(express.static('localhost:8000/public'));

//Server is listening
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
});
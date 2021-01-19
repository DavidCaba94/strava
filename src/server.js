const express = require('express');
const app = express();

//Settings
app.set('port', 3000);

//Middleware

//Routes

//Static files
app.use(express.static('localhost:8000/public'));

//Server is listening
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
});
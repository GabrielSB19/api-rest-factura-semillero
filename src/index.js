const express = require('express');
const app = express();

//Setings
app.set('port', 3000 || process.env.PORT);

//Middlewares
app.use(express.json());

//Routes
app.use(require('./routes/facturas'));

app.listen(app.get('port'), ()=>{
    console.log('Server on port', app.get('port'));
})

const express = require('express')

const app = express();

const PORT = 3001;

app.get('/api', (req, res)=>{
    res.json({mensaje: 'Hola mundo'}).status(200)

});
console.log("mitad de proceso");

app.listen(PORT, ()=>{console.log('estoy escuchando en el puerto: '+PORT)})

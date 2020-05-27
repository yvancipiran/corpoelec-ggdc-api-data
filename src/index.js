const express = require('express');
const app = express();

// Middlewares | Software Intermedio
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// Definicion de rutas
app.use(require('./routes/index.js'));


app.listen(3000);
console.log('Servidor en puerto 3000');


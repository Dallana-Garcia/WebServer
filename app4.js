/**
 * Instalar en este proyecto EXPRESS
 * npm i install express
 */
const express = require('express')
const app = express()

app.get('/', function (req, res) {
    res.send('Hola mundo')
})

app.listen(8080);

// SHERLY DALLANA LUCÍA GARCÍA YAC

// 2290-20-8516
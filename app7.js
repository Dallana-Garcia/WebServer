const express = require('express')
const app = express()
const port = 8080

app.get('/', (req, res) => {
    res.send('Home Page')
})

app.get('/hola-mundo', (req, res) => {
    res.send('Hola Mundo en su respectiva ruta')
})

app.get('*', (req, res) => {
    res.send('404 Page not found')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);

})

// node app7
// 

// SHERLY DALLANA LUCÍA GARCÍA YAC
// CARNET: 2290-20-8516
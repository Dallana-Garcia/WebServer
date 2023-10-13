const express = require('express')
const app = express()
const port = 8080

/**
 * Se creó carpeta public y dentro index.html
 * Se creará un Middlware para habilitar ruta la index.html
 */

//Servir contenido estático
app.use(express.static('public'))

app.get('/hola-mundo', (req, res) => {
    res.send('Hola mundo en su respectiva ruta')
})

app.get('*', (req, res) => {
    res.send('404 Page not found')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost: ${port}`);
})

// SHERLY DALLANA LUCÍA
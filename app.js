// Se requiere el paquete http

const http = require('http')

//CREANDO EL WEBSERVER

http.createServer((req,res) =>{
    res.write('Hola Mundo');
    res.end();
})
.listen(8080)

console.log('Escuchando el puerto', 8080);

// SHELRY DALLANA LUCÍA GARCÍA YAC
// CARNET: 2290-20-8516
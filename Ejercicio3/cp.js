"use strict";
exports.__esModule = true;
// importa la libreria filesystem
var fs = require("fs");
// se declara una variable que guardara la ruta de origen
var origen = process.argv[2];
// se declara una variable que guardara la ruta de destino
var destino = process.argv[3];
// asignamos las rutas a otras variables para operar con ellas
var ArchivoOrigen = origen;
var ArchivoDestino = destino;
var argu = '';
// mediante el modulo readfilesync leemos el archivo
var data = fs.readFileSync(ArchivoOrigen, 'utf-8');
// guardamos el contenido del archivo original
argu = data;
// copiamos ese contenido en el archivo de destino
fs.writeFileSync(ArchivoDestino, data);
/* Para ejecutar el programa use el siguiente comado
 * npm run --silent cp RUTAORIGEN RUTADESTINO
 *
 * Ejemplo de funcionamiento
 * npm run --silent cp ./prueba.txt ./name.txt
 * les devolvera el contenido del archivo
 */ 

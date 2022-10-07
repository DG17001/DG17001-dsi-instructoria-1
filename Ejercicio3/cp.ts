// importa la libreria filesystem
import * as fs from 'fs';

// se declara una variable que guardara la ruta de origen
let origen: string=process.argv[2];

// se declara una variable que guardara la ruta de destino
let destino: string=process.argv[3];

// asignamos las rutas a otras variables para operar con ellas
let ArchivoOrigen: string = origen;
let ArchivoDestino: string = destino;
let argu: string='';

// mediante el modulo readfilesync leemos el archivo
const data=fs.readFileSync(ArchivoOrigen, 'utf-8');
// guardamos el contenido del archivo original
argu=data;
// copiamos ese contenido en el archivo de destino
fs.writeFileSync(ArchivoDestino, data);

/* Para ejecutar el programa use el siguiente comado
 * npm run --silent cp RUTAORIGEN RUTADESTINO
 * 
 * Ejemplo de funcionamiento
 * npm run --silent cp ./origen.txt ./destino.txt
 * les devolvera el contenido del archivo
 */ 
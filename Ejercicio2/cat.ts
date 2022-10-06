// importa los modulos a usar de cada libreria
import { promises as fsPromises } from 'fs';
import * as path from 'path';

// declara una variables que recibira los parametros
const filepath = path.resolve(__dirname, process.argv[2]);

// crea una funcion asincrona
(async () => {
	// lee el archivo pasado como parametro
    const data = await fsPromises.readFile(filepath, 'utf8');
	// imprime el contenido del archivo
    console.log(data);
})();

/* Para ejecutar el programa use el siguiente comado
 * npm run --silent cat ../prueba.txt
 * les devolvera el contenido del archivo
 */ 
// se declara la funcion
function leer(){
	// se declara una variable que empieza a escuchara la entrada por consola
	const stdin = process.openStdin();
	// escuchamos la data ingresada
	stdin.addListener("data", (data) => {
		//imprimimos la entrada por consola
		console.log(data.toString());
		// cerramos la llamada al sistema
		process.exit()
	})
}
// llamamos a la funcion
leer()
/* 
* Para ejecutar el programa use el siguiente comando
* npm run --silent echo
* luego se le pedira el texto que quiera ingresar
*/
var Luis = {
	nombre: "Luis",
	apellido: "Martinez",
	edad: 17
}

var Dario = {
	nombre: "Dario",
	apellido: "Perez",
	edad: 25
}

function imprimirNombreEnMayusculas(persona) {
	var {nombre} = persona;
	console.log(nombre.toUpperCase());
}

imprimirNombreEnMayusculas(Luis);
imprimirNombreEnMayusculas(Dario);

//Escribe una funcion que imprima el nombre y edad
//Hola me llamo Luis Martinez y tengo 17 años <- Salida de ejemplo

function impimirNombreYEdad(persona){
	var {nombre, apellido, edad} = persona
	console.log(`Hola me llamo ${nombre.toUpperCase()} y tengo ${edad} años`);

}

impimirNombreYEdad(Luis);
impimirNombreYEdad(Dario);

console.log("Parte nueva")

var Armando = {
	nombre: "Armando",
	apellido: "Martinez",
	edad: 22,
	videojuego_favorito: "Jak and Daxter"
}

var Zaid = {
	nombre: "Zaid",
	apellido: "Barcenas",
	edad: 17,
	videojuego_favorito: "Fortnite"
}
function imprimirNombreEnMayusculas(persona) {
	var nombre = persona.nombre;
	console.log(nombre.toUpperCase());
}


function birthday(persona){
	persona.edad = persona.edad + 1;
}

imprimirNombreEnMayusculas(Armando);
imprimirNombreEnMayusculas(Zaid);

function cumpleaños(persona){
	return{
	...persona,
	edad: persona.edad + 1
	}
}
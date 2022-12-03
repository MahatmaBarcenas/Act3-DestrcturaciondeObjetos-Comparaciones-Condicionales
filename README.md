# Act3-DestrcturaciondeObjetos-Comparaciones-Condicionales

## Lineas de codigo

## DestruturacionObjetos.js
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
## Comparaciones.js
var x = 4, y = "4";

//

var sacha = {
	nombre: "Sacha"
}

//var otraPersona = {
	// nombre: "Sacha"
//}

var otraPersona = sacha;

//Modificar la propiedad nombre del objeto a traves
//de "Otra Persona"(no
//es tarea, pero puede ser ejercicio de practica.)
## Condicionales.js
var sacha = {
	nombre: "Sacha",
	apellido: "Smith",
	edad: 28,
	ingeniero: true,
	cocinero: false,
	cantante: false,
	dj: false,
	guitarrista: false,
	drone: true
}
//Reto #1: Mostrar todas las profesiones de Sacha (Que sean true)
//Reto #2: Mostrar que Sacha no tiene dicha profesion: NO es dj
//Reto #3: Crear una funcion para saber si la persona es mayor de edad

function reto1(persona){
	console.log(`${persona.nombre} es: `);

		if (persona.ingeniero === true) {
			console.log("ingeniero")
		}

		if (persona.cocinero === true) {
			console.log(" cocinero")
		}

		if (persona.cantante === true) {
			console.log(" cantante")
		}

		if (persona.dj === true) {
			console.log(" dj")
		}

		if (persona.guitarrista === true) {
			console.log(" guitarrista")
		}

		if (persona.drone === true) {
			console.log(" drone")
		}
}
reto1(sacha);

//reto2

function reto2(persona){
	console.log(`${persona.nombre} no es: `);

		if (persona.ingeniero === false) {
			console.log("ingeniero")
		}

		if (persona.cocinero === false) {
			console.log(" cocinero")
		}

		if (persona.cantante === false) {
			console.log(" cantante")
		}

		if (persona.dj === false) {
			console.log(" dj")
		}

		if (persona.guitarrista === false) {
			console.log(" guitarrista")
		}

		if (persona.drone === false) {
			console.log(" drone")
		}
}
reto2(sacha);

//reto3

function reto3(persona){
	console.log(`${persona.apellido} ${persona.nombre} tiene ${persona.edad} años, por lo que es: `);

	if (persona.edad >= 18) {
		console.log("Mayor de edad");
	} 

	else {
		console.log("Menor de edad");
	}
}

reto3(sacha);

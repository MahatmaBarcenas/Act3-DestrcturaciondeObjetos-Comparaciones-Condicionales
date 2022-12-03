# Act3-DestrcturaciondeObjetos-Comparaciones-Condicionales

## Lineas de codigo

## DestruturacionObjetos.js
Se declara una variable llamada luis, cual tiene varios valores porque lo que es un objeto 
```javascript 
var Luis = {
```
Se define uno de lo valores del objeto, este se llama nombre y su valor es "Luis"
```javascript
nombre: "Luis",
```
Se defiende uno de los valores del objeto, este se llama apellido y su valor es "Martinez"
```javascript 
apellido: "Martinez",
```
Se defiende uno de lo valores del objeto, este se llama edad y su valor es 17
```javascript
edad: 17
```
Se cierra el objeto
```javascript 
}
```
Se declara una variable llamada Dario, cual tiene varios valores porque lo que es un objeto
```javascript
var Dario = {
```
Se defiende uno de lo valores del objeto, este se llama nombre y su valor es "Dario"
```javascript
nombre: "Dario",
```
Se defiende uno de lo valores del objeto, este se llama apellido y su valor es "Perez"
```javascript
apellido: "Perez",
```
Se defiende uno de lo valores del objeto, este se llama edad y su valor es 25
```javascript
edad: 25
```
Se cierra el objeto	
```javascript
}
```

Se declara la funcion imprimirNombreEnMayusculas, tiene un parametro es cual persona
```javascript
function imprimirNombreEnMayuscula(persona) {
```
Se extrae los datos nombre de las variables persona
```javascript
var {nombre} = persona;
```
Se muestra un mensaje en consola el cual dira "LUIS" y/o "DARIO"	
```javascript
console.log(nombre.toUpperCase());
```
Se cierra la funcion imprimirNombreEnMayusculas	
```javascript
}
```
Se ejecuta la funcion imprimirNombreEnMayusculas con el los valores del objeto Luis
```javascript
imprimirNombreEnMayuscula(Luis);
```
Se ejecuta la funcion imprimirNombreEnMayusculas con el los valores del objeto Dario
```javascript
imprimirNombreEnMayuscula(Dario)
```
Estos es un mensaje
```javascript
//Escribe una funcion que imprima el nombre y edad
```
Esto es un mesnsaje
```javascript
//Hola me llamo Luis Martinez y tengo 17 años <- Salida de ejemplo
```
Se declara la funcion impimirNombreYEdad con el parametro persona
```javascript
function impimirNombreYEdad(persona){
```
Se define una variables que extrae los datos nombre, apellido y edad de los objetos
```javascript
var {nombre, apellido, edad} = persona
```
Se muestra un mensaje en consola, el cual dira "Hola me llamo LUIS y tengo 17 años" y/o "Hola me llamo DARIO y tengo 25 años"	
```javascript
console.log(`Hola me llamo ${nombre.toUpperCase()} y tengo ${edad} años`);
```
Se cierra la funcion impimirNombreYEdad
```javascript
}
```

Se ejecuta la funcion impimirNombreYEdad con el los valores del objeto Luis
```javascript
impimirNombreYEdad(Luis);
```
Se ejecuta la funcion impimirNombreYEdad con el los valores del objeto Dario
```javascript
impimirNombreYEdad(Dario)
```
```javascript
console.log("Parte nueva")
```
```javascript
var Armando = {
```
```javascript
nombre: "Armando",
```
```javascript	
apellido: "Martinez",
```
```javascript
edad: 22,
```
```javascript
videojuego_favorito: "Jak and Daxter"```
```javascript
}
```
```javascript
var Zaid = {
```
```javascript
nombre: "Zaid",
```
```javascript
apellido: "Barcenas",
```
```javascript
edad: 17,
```
```javascript
videojuego_favorito: "Fortnite"
```
```javascript
}
```
```javascript
function imprimirNombreEnMayusculas(persona) {
```
```javascript
var nombre = persona.nombre;
```
```javascript
console.log(nombre.toUpperCase());
```
```javascript
}
```
```javascript
function birthday(persona){
```
```javascript
persona.edad = persona.edad + 1;```
```javascript
}
```
```javascript
imprimirNombreEnMayusculas(Armando);
```
```javascript
imprimirNombreEnMayusculas(Zaid);
```
```javascript
function cumpleaños(persona){
```
```javascript
return{
```
```javascript
...persona,
```
```javascript
edad: persona.edad + 1
```
```javascript
}
```
```javascript
}
```
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

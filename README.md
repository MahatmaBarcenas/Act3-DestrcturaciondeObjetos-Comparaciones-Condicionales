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
Se muestra un mensaje en consola el cual dira "Parte nueva"
```javascript
console.log("Parte nueva")
```
Se declara el objeto Armando
```javascript
var Armando = {
```
Se declara la variable nombre del objeto, con valor de "Armando"
```javascript
nombre: "Armando",
```
Se declara la variable apellido del objeto, con valor de "Martinez"
```javascript	
apellido: "Martinez",
```
Se declara la variable edad del objeto, con valor de 22
```javascript
edad: 22,
```
Se declara la variable videojuego_favorito del objeto, con valor de "Jak and Daxter"
```javascript
videojuego_favorito: "Jak and Daxter"
```
Se cierra el objeto
```javascript
}
```
Se declara el objeto Zaid
```javascript
var Zaid = {
```
Se declara la variable nombre del objeto, con valor de "Zaid"
```javascript
nombre: "Zaid",
```
Se declara la variable apellido del objeto, con valor de "Barcenas"
```javascript
apellido: "Barcenas",
```
Se declara la variable edad del objeto, con valor de 17
```javascript
edad: 17,
```
Se declara la variable videojuego_favorito del objeto, con valor de "Fortnite"
```javascript
videojuego_favorito: "Fortnite"
```
Se cierra el objeto
```javascript
}
```
Se declara un funcion llamado imprimirNombreEnMayusculas, con el parametro persona
```javascript
function imprimirNombreEnMayusculas(persona) {
```
Se declara una varible llamada nombre que extrae la variable nombre de las personas
```javascript
var nombre = persona.nombre;
```
Se muestra un mensaje en consola, el cual dira "ARMANDO" y/o "ZAID"
```javascript
console.log(nombre.toUpperCase());
```
Se cierra la funcion imprimirNombreEnMayusculas
```javascript
}
```
Se declara una funcion llamada birthdat, con el parametro persona
```javascript
function birthday(persona){
```
Se declara una variable llamada persona.edad la cual extrae la varieble edad de los objetos y le suma 1
```javascript
persona.edad = persona.edad + 1;
```
Se cierra la funcion birthday
```javascript
}
```
Se ejecuta la funcion imprimirNombreEnMayusculas, con el objeto Armando
```javascript
imprimirNombreEnMayusculas(Armando);
```
Se ejecuta la funcio imprimirNombreEnMayusculas, con el objeto Zaid
```javascript
imprimirNombreEnMayusculas(Zaid);
```
Se declara la funcion cumpleaños, con el parametro persona
```javascript
function cumpleaños(persona){
```
Se regresaran las objetos
```javascript
return{
```
Las objetos personas regresaran sus 
```javascript
...persona,
```
A la variable edad del objeto se le sumara 1
```javascript
edad: persona.edad + 1
```
Se cierra el return
```javascript
}
```
Se cierra la funcion cumpleaños
```javascript
}
```
## Comparaciones.js
Se declaran 2 variables una llamada x y la otra y, x con un valor de 4 y, y con un valor de "4"
```javascript
var x = 4, y = "4";
```
Esto es un comentario
```javascript
//
```
Se declara un objeto llamado sacha
```javascript
var sacha = {
```
Se declara la varible nombre del Objeto, con valor de "Sacha"
```javascript
nombre: "Sacha"
```
Se cierra el objeto
```javascript
}
```
Esto es un comentario
```javascript
//var otraPersona = {
```
Esto es un comentario
```javascript
// nombre: "Sacha"
```
Esto es un comentario
```javascript
//}
```
Se declara una variable llamada otraPersona, con un vlor de sacha
```javascript
var otraPersona = sacha;
```
Esto es un comentario
```javascript
//Modificar la propiedad nombre del objeto a traves
```
Esto es un comentario
```javascript
//de "Otra Persona"(no
```
Esto es un comentario
```javascript
//es tarea, pero puede ser ejercicio de practica.)
```

## Condicionales.js
Se declara un objeto llamado sacha
```javascript
var sacha = {
```
Se declara la variable nombre del objeto, con el valor de "Sacha"
```javascript
nombre: "Sacha",
```
Se declara la variable apellido del objeto, con el valor de "Smith"
```javascript
apellido: "Smith",
```
Se declara la variable edad del objeto, con el valor de 28
```javascript
edad: 28,
```
Se declara la variable ingeniero del objeto, con el valor de true
```javascript
ingeniero: true,
```
Se declara la variable cocinero del objeto, con el valor de false
```javascript
cocinero: false,
```
Se declara la variable cantante del objeto, con el valor de false
```javascript
cantante: false,
```
Se declara la variable dj del objeto, con el valor de false
```javascript
dj: false,
```
Se declara la variable guitarrista del objeto, con el valor de false
```javascript
guitarrista: false,
```
Se declara la variable drone del objeto, con el valor de true
```javascript
drone: true
```
Se cierra el objeto
```javascript
}
```
Esto es un comentario
```javascript
//Reto #1: Mostrar todas las profesiones de Sacha (Que sean true)
```
Esto es un comentario
```javascript
//Reto #2: Mostrar que Sacha no tiene dicha profesion: NO es dj
```
Esto es un comentario
```javascript
//Reto #3: Crear una funcion para saber si la persona es mayor de edad
```
Se declara la funcion reto1, con el parametro persona
```javascript
function reto1(persona){
```
Se muestra un mensaje en consola, el cual dira "Sacha es: "
```javascript
console.log(`${persona.nombre} es: `);
```
Se comprueba si la variable ingeniero es igual a true
```javascript
if (persona.ingeniero === true) {
```
Este mensaje solo mostrar en consola si la condicion anterior es correcta
```javascript
console.log("ingeniero")
```
Se cierra el if
```javascript
}
```
Se comprueba si la variable cocinero es igual a true
```javascript
if (persona.cocinero === true) {
```
Este mensaje solo mostrar en consola si la condicion anterior es correcta
```javascript
console.log(" cocinero")
```
Se cierra el if
```javascript
}
```
Se comprueba si la variable cantante es igual a true
```javascript
if (persona.cantante === true) {
```
Este mensaje solo mostrar en consola si la condicion anterior es correcta
```javascript
console.log(" cantante")
```
Se cierra el if
```javascript
}
```
Se comprueba si la variable dj es igual a true
```javascript
if (persona.dj === true) {
```
Este mensaje solo mostrar en consola si la condicion anterior es correcta
```javascript
console.log(" dj")
```
Se cierra el if
```javascript
}
```
Se comprueba si la variable guitarrista es igual a true
```javascript
if (persona.guitarrista === true) {
```
Este mensaje solo mostrar en consola si la condicion anterior es correcta
```javascript
console.log(" guitarrista")
```
Se cierra el if
```javascript
}
```
Se comprueba si la variable drone es igual a true
```javascript
if (persona.drone === true) {
```
Este mensaje solo mostrar en consola si la condicion anterior es correcta
```javascript
console.log(" drone")
```
Se cierra el if
```javascript
}
```
Se cierra la funcion llamada reto1
```javascript
}
```
Se ejecuta la funcion reto1, con el objeto sacha
```javascript
reto1(sacha);
```
Esto es un comenatario
```javascript
//reto2
```
Se declara la funcion reto2, con el parametro persona
```javascript
function reto2(persona){
```
Se muestra en consola un mensaje el cual dira "Sacha no es: "
```javascript
console.log(`${persona.nombre} no es: `);
```
Se comprueba si la variable ingeniero es igual a false
```javascript
if (persona.ingeniero === false) {
```
Este mensaje solo mostrar en consola si la condicion anterior es correcta
```javascript
console.log("ingeniero")
```
Se cierra el if
```javascript
}
```
Se comprueba si la variable cocinero es igual a false
```javascript
if (persona.cocinero === false) {
```
Este mensaje solo mostrar en consola si la condicion anterior es correcta
```javascript
console.log(" cocinero")
```
Se cierra el if
```javascript
}
```
Se comprueba si la variable cantante es igual a false
```javascript
if (persona.cantante === false) {
```
Este mensaje solo mostrar en consola si la condicion anterior es correcta
```javascript
console.log(" cantante")
```
Se cierra el if
```javascript
}
```
Se comprueba si la variable dj es igual a false
```javascript
if (persona.dj === false) {
```
Este mensaje solo mostrar en consola si la condicion anterior es correcta
```javascript
console.log(" dj")
```
Se cierra el if
```javascript
}
```
Se comprueba si la variable guitarrista es igual a false
```javascript
if (persona.guitarrista === false) {
```
Este mensaje solo mostrar en consola si la condicion anterior es correcta
```javascript
console.log(" guitarrista")
```
Se cierra el if
```javascript
}
```
Se comprueba si la variable drone es igual a false
```javascript
if (persona.drone === false) {
```
Este mensaje solo mostrar en consola si la condicion anterior es correcta
```javascript
console.log(" drone")
```
Se cierra el if
```javascript
}
```
Se cierra la funcion reto2
```javascript
}
```
Se ejecuta la funcion reto2 con el objeto sacha
```javascript
reto2(sacha);
```
Esto es un comentario
```javascript
//reto3
```
Se declara la funcion reto3, con el parametro persona
```javascript
function reto3(persona){
```
Se muestra un mensaje en consola, el cual dira "Smith Sacha tiene 28 años, por lo que es: "
```javascript
console.log(`${persona.apellido} ${persona.nombre} tiene ${persona.edad} años, por lo que es: `);
```
Comprueba si la variable edad es mayor o igual a 18
```javascript
if (persona.edad >= 18) {
```
Este mensaje se mostrara si la condicion anterior es correcta
```javascript
console.log("Mayor de edad");
```
Se cierra el if
```javascript
} 
```
En caso de que la condicion no se cumpla, se usara el else para dar una nueva instruccion
```javascript
else {
```
Este mensaje se muestra solo si la condicion del if es incorrecta
```javascript
console.log("Menor de edad");
```
Se cierra el else
```javascript
}
```
Se cierra la funcio reto3
```javascript
}
```
Se ejecuta la funcion reto3 con el objeto sacha
```javascript
reto3(sacha);
```

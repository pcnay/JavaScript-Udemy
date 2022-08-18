// en este video estaremos viendo querySelectorAll

// la buena noticia es que la sintaxis para selectores es la misma, es decir similar a CSS, con el punto para las classes y el numeral o signo de gato para los ID's, también puedes añadir un selector especifico..

// Pero la diferencia principal, es que querySelectorAll va a retornar todos los elementos que concuerden con el selector y no va a limitarte al primero como querySelector.


// En nuestro HTML hay muchos cards, cuando utilizamos querySelector vimos que retornaba unicamente el primero..

// Retorna todas las clases con el nombre "card"
// Lo mismo sería para los "Id".
// Todas las etiquetas de HTML en JavaScript se le conoce como "nodos".
// Cuando una etiqueta HTML no existe, retorno un arreglo Vacio.


const card = document.querySelectorAll('.card');
console.log (card);

// Se separan las clases para seleccionar en casacada, ".premium" es el padre, "info" es el hijo, se selecciona la clase "info".
const info = document.querySelectorAll('.premium .info')
// console.log (info);

// Seleccionar el 2do ".card" de section "Hospedaje", que contiene 3 clases ".card"
// "nth-child(2)", selecciona el segundo elemento
const segundoCard = document.querySelectorAll('section.hospedaje .card:nth-child(2)');
// console.log (segundoCard);

// Seleccionando un "Id" del Formulario.
const id_Formulario = document.querySelectorAll('#formulario');
//console.log (id_Formulario);

// Seleccionar elementos HTML.
const navegacion = document.querySelectorAll('nav');
console.log (navegacion);

/*

const cards = document.querySelectorAll('.card'); 
console.log(cards);

// si recuerdas tenemos dos elementos con el id de formulario

const formularios = document.querySelectorAll('#formulario'); 
console.log(formularios); // Puedes ver quue eso si funciona, sin embargo recuerda que no rescomendable tener el mismo ID más de una vez por docuemnto...


// Si no hay elementos no va a retornar nada

// Si un selector no existe, 
const noExiste = document.querySelectorAll('#no-existe');
console.log(noExiste);
*/

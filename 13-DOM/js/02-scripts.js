// En este video estaremos viendo como seleccionar elementos por su clase...

const header = document.getElementsByClassName('header');

const hero = document.getElementsByClassName('hero');

// Si las clases existen mas de una vez.
const contenedores = document.getElementsByClassName('contenedor');

// Si una clase no existe
// Muestra un arreglo vacio.
const noExiste = document.getElementsByClassName('no-existe');

console.log(noExiste);


/*
// Seleccionando el header...

                // Todos tus selectores inician con document...
const header = document.getElementsByClassName('header'); // Es muy importante las mayusculas y minusculas...
console.log(header);

const hero = document.getElementsByClassName('contenido-hero');
console.log(hero);


// Como las classes se pueden repetir, obviamente todas las coincidencias de classes se asignaran a contenedores.
const contenedores = document.getElementsByClassName('contenedor');
console.log(contenedores);


// Si una clase no existe, no va a retornar nada...
const noExiste = document.getElementsByClassName('no-existe');
console.log(noExiste);

*/

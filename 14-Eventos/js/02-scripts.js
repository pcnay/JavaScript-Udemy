// En este video estaremos viendo eventos que ocurren con el mouse
const nav = document.querySelector('.navegacion');

// Registrar un evento.
nav.addEventListener('click', () => {
	console.log('click en nav');
});

nav.addEventListener('mouseenter', () => {
	console.log ('Entrando al Menu');
	nav.style.backgroundColor = 'white';
});

nav.addEventListener('mouseout', () => {
	console.log ('Saliendo de la Nav');
	nav.style.backgroundColor = 'transparent';

});

nav.addEventListener('mouseup', () => {
	console.log ('Saltando el click Izq. Raton');
	nav.style.backgroundColor = 'blue';
});

nav.addEventListener('dblclick', () => {
	console.log ('Doble click en el menu ');
	nav.style.backgroundColor = 'yellow';
});

/* 
const nav = document.querySelector('.navegacion');


// vamos a registrar el eventListener para el nav..

nav.addEventListener('mouseenter', () => {
    console.log('entrando a navegacion')

    nav.style.backgroundColor = 'white';
});

nav.addEventListener('mouseout', () => {
    console.log('saliendo de la navegacion');

    nav.style.backgroundColor = 'transparent';
})


// otros eventos abarcan...

// mousedown - // cuando presionamos
// click - similar, de hecho es probablemente el más utilizado..
// dbclick - doble click como cuando quieres abrir un archivo
// mouseup - al soltar
// 

*/

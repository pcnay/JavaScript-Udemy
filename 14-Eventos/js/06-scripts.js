// Veamos lo que se conoce como Event Bubbling...

// Event Bubling es cuando presionas en un evento, pero ese evento se propaga por muchos otros dando resultados inesperados

 // tenemos diferentes cards, con información...
//  vamos a crear 3 selectores

const cardDiv = document.querySelector('.card');
const infoDiv = document.querySelector('.info');
const cardDiv = document.querySelector('.titulo');
cardDiv.addEventListener('click', e => {
	e.stopPropagation(); // Elimina el bubbling
	console.log('click en Card');
});

infoDiv.addEventListener('click', e => {
e.stopPropagation(); // Elimina el bubbling
console.log('click en Info');
});

// Cuando se realiza un click en "Info" afecta a "Card"
// Esto se le llama efecto "bubbling"

titulo.addEventListener('click', e => {
e.stopPropagation(); // Elimina el bubbling
console.log('click en Titulo');
});



/*
const cardDiv = document.querySelector('.card');
const infoDiv = document.querySelector('.info');
const titulo = document.querySelector('.titulo');


cardDiv.addEventListener('click', e => {
    e.stopPropagation();
    console.log('click card');
})
infoDiv.addEventListener('click', e => {
    e.stopPropagation();
    console.log('click info');
})

titulo.addEventListener('click', e => {
    e.stopPropagation();
    console.log('click titulo');
})
*/

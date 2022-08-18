// Finalmente otro tema importante cuando trabajas con el DOM, es la creación de HTML desde JavaScript..

// Cuando publicas un tweet, tienes un textarea que al enviarlo se agrega al listado de tweets, de ahi la gente comienza a darle me gusta, así que veamos como hacerlo generar HTML desde JavaScript...


// Y no te preocupes si todo lo que vemos en este video no queda claro, estaremos practicando mucho lo que es el DOM Scripting ya con muchos otros proyectos...

// Vamos a crear un nuevo enlace... lo primero que hay que hacer es crear el elemento HTML, en este caso un enlace...

/*
// Creando la etiqueta "<a>"
const enlace = document.createElement('a');
// Agregando el texto.
enlace.textContent = "Nuevo Enlace";
// Añadiendo el href.
enlace.href = "/nuevo-enlace";
enlace.target = "_blank";
// Agregando un atributo a la etiqueta.
enlace.setAttribute('data-enlace','nuevo-enlace');
// Agregando una clase.
enlace.classList.add('clase-agregada');

console.log(enlace);

// Seleccionar en que posición estará en el Menú General para este caso.
const navegacion = document.querySelector('.navegacion');
// Agregando un hijo(creado, "enlace") al Menu General.
// navegacion.appendChild(enlace);

// Insertando un "<a></a>", se debe seleccionar la posición.
navegacion.insertBefore(enlace,navegacion.children[1]);

// Agregando un evento "onclick".
enlace.onclick = miFuncion;

function miFuncion()
{
	alert ("Funcion creada en <a> </a> definida por JavaScript");
}
*/


// Crear un "Card" de forma dinámica.
const parrafo1 = document.createElement('p');
parrafo1.textContent ='Concierto';
parrafo1.classList.add('categoria','concierto');

const parrafo2 = document.createElement('p');
parrafo2.textContent = "Concierto De Rock";
parrafo2.classList.add('titulo');

const parrafo3 = document.createElement('p');
parrafo3.textContent = "$800 por persona";
parrafo3.classList.add('precio');

// Se crea un "DIV" para agrupar los parrafos
const info = document.createElement('div');
info.classList.add('info');
info.appendChild(parrafo1);
info.appendChild(parrafo2);
info.appendChild(parrafo3);

// Creando una imagen.
const imagen = document.createElement('img');
imagen.src = 'img/hacer2.jpg';
// Agregar una clase.
imagen.classList.add('img-fluid');
imagen.alt = "Texto Alternativo";

// Crear el "card"
const card = document.createElement('div');
card.classList.add('card');

// Agregar la imagen.
card.appendChild(imagen);

// Agregando "info"
card.appendChild(info);

//Ahora es insertarlo en la posicion deseada, depende del nombre de la etiqueta.
// <section class="hacer contenedor-cards"> </section>Z
const contenedor = document.querySelector('.hacer .contenedor-cards');
contenedor.appendChild(card);

// Si se quiere insertar al inicio de las imagenes, se suprime "appendChild"
contenedor.insertBefore(card,contenedor.children[0]);

/* ===================================================================================
=======================================================================================

const enlace = document.createElement('A');

// Segundo paso es crear el texto del enlace no? lo haremos con textContent

enlace.textContent = 'Nuevo Enlace';

// Despues vamos a asignar una ruta 
enlace.href = '/nuevo-enlace';
// Finalmente se agrega el enlace donde deseas mostrarlo...

// Si quieres agregar una clase

enlace.classList.add('enlace');

enlace.setAttribute('data-enlace', 'nuevo-enlace')

const navegacion = document.querySelector('.navegacion');
navegacion.appendChild(enlace);


console.log(enlace);


// Vamos a crear un segundo ejemplo, crearemos uno de nuestros cards... sin duda será algo más complejo...

// crear los 3 parrafos.

const parrafo1 = document.createElement('P');
parrafo1.textContent = 'Concierto';
parrafo1.classList.add('categoria');
parrafo1.classList.add('concierto');

// Segundo parrafo
const parrafo2 = document.createElement('P');
parrafo2.textContent = 'Concierto de Rock';
parrafo2.classList.add('titulo');

// 3er parrafo...
const parrafo3 = document.createElement('p');
parrafo3.textContent = '$800 por pesrona';
parrafo3.classList.add('precio');

// crear el div...
const info = document.createElement('div');
info.classList.add('info');
info.appendChild(parrafo1)
info.appendChild(parrafo2)
info.appendChild(parrafo3);


// Vamos a crear la imagen
const imagen = document.createElement('img');
imagen.src = 'img/hacer2.jpg';

// Crear el Card..
const card = document.createElement('div');
card.classList.add('card');

// Vamos a asignar la imagen al card...
card.appendChild(imagen);

// y el info
card.appendChild(info);


// Insertarlo en el HTML...
const contenedor = document.querySelector('.hacer .contenedor-cards');
contenedor.appendChild(card); // al inicio info

console.log(parrafo1);
console.log(parrafo2);

*/

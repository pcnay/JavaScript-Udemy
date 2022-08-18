let elemento;
elemento = document;
elemento = document.all; // Muestra todas etiquetas del HTML
elemento = document.head;
elemento = document.body // Selecciona todas las etiquetas que contiene el "body" 
elemento = document.domain; // Muestra el dominio desde donde se esta ejecutando la página
elemento = document.forms; // Mustra todos los formularios de la pagina Web Actual
elemento = document.forms[0]; // Acceder al primer elemento de los formularios
elemento = document.forms[0].id; // Acceder al "Id" que tiene asignado el formularios
elemento = document.forms[0].method; // Que método utiliza para enviar la informacion
elemento = document.forms[0].classList; // Muestra todas las clases definida en el formulario.
elemento = document.forms[0].action; // Muestra que función se utiliza para ejecutar una acción 
elemento = document.links; // Muestra todos los "link" que tiene la página, arreglo, se puede seleccionar uno en especifico.
elemento = document.links[4]; // Para seleccionar un enlace el número 4 
elemento = document.links[4].classList; // Lista todas los nombres de clases que contiene el enlace, retornando en formato de arreglo.
elemento = document.links[4].className; // Lista todas los nombres de clases que contiene el enlace, retornando en cadena de texto.
elemento = document.images; // Muestra cuantas imagenes contiene la página Web.
elemento = document.script; // Muestra todos los script que contiene la página Web.


console.log(elemento); /* Selecciona solamente el "Head"


/*

// 01- Vamos a abrir el capitulo 13-DOM y abrirlo en Live server

// Lo primero que haremos sera crear una carpeta llamada js / y en ella colocar el archivo scripts.js

let elemento;

elemento = document;
elemento = document.all;
elemento = document.all[0];
elemento = document.head;
elemento = document.body;
elemento = document.domain;
elemento = document.URL;
elemento = document.characterSet;
elemento = document.contentType;
elemento = document.forms;
elemento = document.forms[0];
elemento = document.forms[0].id;
elemento = document.forms[0].method;
elemento = document.forms[0].action;

elemento = document.links;
elemento = document.links[4].id;
elemento = document.links[4].className;
elemento = document.forms[4].classList;
elemento = document.forms[4].classList[0];

elemento = document.images;

elemento = document.scripts;
elemento = document.scripts[2].getAttribute('src');

console.log(elemento);
*/




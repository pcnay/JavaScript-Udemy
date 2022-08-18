// Después de una super extensa explicación de Traversing y acceder a elementos, veamos como eliminar elementos del DOM

// Es muy común no? cuando borras una foto de facebook o un tweet se elimina automaticamente, también cuando quitas elementos del carrito de compras de amazon.

// Cuando le diste me gusta a una foto por accidente y le quitas el like, también hay un cambio, así que sin duda eliminar elementos llega a ser muy común..

// Hay 2 formas de eliminar, una es eliminar un elemento por si mismo y la otra es eliminarlo desde el padre...

// Seleccionando el primer elemento.
const primerElemento = document.querySelector('a');
//console.log(primerElemento);
// Eliminando el nodo.
//primerElemento.remove();

// Eliminando un nodo desde el Padre.
const navegacion = document.querySelector('.navegacion');
// Se selecciona "children" porque despliega las referencias, es decir nos muestra un identificador para borrarlo.
console.log (navegacion.children)
// Borrando un nodo hijo en especifico.
navegacion.removeChild(navegacion.children[2]);


/* =================================================================================
===================================================================================

const primerEnlace = document.querySelector('a');
primerEnlace.remove();


// La otra forma es por el padre..
const navegacion = document.querySelector('.navegacion');

// el sigueinte paso es identificar el elemento a borrar..

// console.log(navegacion.children);

// navegacion.removeChild(navegacion.children[2]);

// Otra forma es creando una variable...

const borrar = navegacion.children[2]
navegacion.removeChild(borrar);

// Como resumen recuerda hay 2 formas de eliminar elementos, uno es por el elemento por si mismo y el otro requiere el padre y la referencia del hijo..
*/


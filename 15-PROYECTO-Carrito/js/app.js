// Variables
// const carrito = Constante porque los elementos de las etiquetas no cambian.
const carrito = document.querySelector('#carrito');

// Contiene el "tbody" donde se colocaran las compras en el carrito.
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito');
const listaCursos = document.querySelector('#lista-cursos');


// Arreglo utilizado para agregar los articulos que se estan seleccionando.
let articulosCarrito = [];

// Registrar todas los click en los botones : Click "Agregar Carrito", "Vaciar Carrito"
// Muestra todos los cursos del id "lista-cursos" 
//console.log ("Lista de cursos",listaCursos);

cargarEventListeners();

// Se utiliza una función.
function cargarEventListeners()
{
	// Click en "Agregar al Curso" a todos que se encuentran en el "<DIV id="lista-cursos"></DIV>"
	listaCursos.addEventListener('click',agregarCurso);

	// Eliminar cursos del Carrito
	// Seleccionado el contenedor donde esta el "Carrito"
	carrito.addEventListener('click',eliminarCurso)

	// Vaciar el carrito
	vaciarCarritoBtn.addEventListener('click',() => {
		articulosCarrito = []; // Resetear el arreglo
		limpiarHTML(); // Eliminando todo el HTML.

	})
}

// Ejecutara a cada curso del arreglo "listaCursos" una Funcion.
function agregarCurso(e)
{	
	//console.log("Presionando en Cursos");
	//console.log (e.target);

	// Determinar si se realizo click "Agregar Al Carrito"
	// Evita que se desplaze la página cuando se hace click en el Boton con el ID "agregar-carrito"
	// <a href="#" class="u-full-width button-primary button input agregar-carrito"
	e.preventDefault(); 

	// Determina que donde se realiza el click sea una etiqueta (arreglo "listaCursos") "agregar-carrito"
	if (e.target.classList.contains('agregar-carrito'))
	{
		//console.log(e.target); // Muestra la etiqueta HTML que se selecciona.
		// console.log(e.target.parentElement.parentElement); // Sube dos niveles(padres), se toma de base los "<DIV>", hasta llegar. <div class="card"></div>
		const cursosSeleccionado = e.target.parentElement.parentElement;
		leerDatosCurso(cursosSeleccionado);
	}
	
} // function agregarCurso(e)

// Lee el contenido del HTML al que le dimos click y extrae la información del curso.
function leerDatosCurso(cursosSeleccionado)
{
	// Muestra el contenido HTML del boton que le realizo el "click"
	// console.log(cursosSeleccionado);
	// Crear un objeto con el contenido del curso actual
	const infoCurso = {
		// "cursosSeleccionado" = Contiene codigo HTML se extrae desde "e.target.parentElement...."
		imagen:cursosSeleccionado.querySelector('img').src, // Seleccionando la imagen
		titulo:cursosSeleccionado.querySelector('h4').textContent, // Extraer el texto de 'h4'
		precio:cursosSeleccionado.querySelector('.precio span').textContent,

		//<a href="#" class="u-full-width button-primary button input agregar-carrito" data-id="1">Agregar Al Carrito</a>
		// Para accesar "data-id"
		id:cursosSeleccionado.querySelector ('a').getAttribute('data-id'),
		cantidad:1
	}

	// Revisa si un elemento ya existe en el carrito, para solo actualiar la "Cantidad"
	const existe = articulosCarrito.some(curso=>curso.id === infoCurso.id );
	// console.log (articulosCarrito);
	if (existe)
	{
		// Actualizamos la "Cantidad"
		// se tendrá que iterar en cada uno de los elementos del Arreglo.
		const cursos = articulosCarrito.map(curso => {
			if (curso.id === infoCurso.id)
			{
				curso.cantidad++;	
				return curso; // Retorno la cantidad actualizada
			}
			else
			{
				return curso;
			}
		});

		// Copiando el arreglo de cursos modificada la cantidad o no
		articulosCarrito = [...cursos];
		
	}
	else
	{
		// se agrega el curso al Carrito.
		// Agrega elementos al arreglo de carrito.
		// Se realiza la copia del arreglo usando forma Declarativa, Spring Operator.
		articulosCarrito = [...articulosCarrito,infoCurso];
		// console.log(articulosCarrito);
	}


	// console.log(infoCurso);

	carritoHTML();

} // function leerDatosCurso(cursosSeleccionado)

// Mostrando en el carrito de compras en código HTML.
function carritoHTML()
{
	// Para evitar que se duplique el último elemento, se debe limpiar
	limpiarHTML();
	
	// Recorre el carrito y genera el HTML.
	// Se van agregar al <table id="lista-carrito" class="u-full-width">
	articulosCarrito.forEach( (curso) => {
		//console.log (curso); // Muestra toda la información del curso.

		// utilizando Destructiration del objeto
		const {imagen,titulo,precio,cantidad,id} = curso;
		// Donde se agregaran será en "<tbody></tbody>"
		const row = document.createElement('tr');
		// Agregando código HTML.
		// Temperal String, o literal
		row.innerHTML = `
			<td>
				<img src="${imagen}"" width="100">
			</td>
			<td>${titulo}</td>
			<td>${precio}</td>
			<td>${cantidad}</td>
			<td>
				<a href="#" class="borrar-curso" data-id="${id}"> X </a>
				
			</td>
		`;

		// Agrega el HTML del carrito (simbolo de carrito compras parte superior) en el "tbody"
		contenedorCarrito.appendChild(row);


	})
}

// Elimina los cursos del "tbody"
function limpiarHTML()
{
	// Forma lenta de eliminar código HTML.
	//contenedorCarrito.innerHTML = '';
	// Para optimizar la ejecucion de este código
	// "firstChild" = Hijo de una etiqueta HTML
	// Se ejecuta mientras exista hijos en "contenedorCarrito"
	while (contenedorCarrito.firstChild)
	{
		// Se borra hijo del contenedorCarrito.
		contenedorCarrito.removeChild(contenedorCarrito.firstChild);
	}
}

// Elimina un curso del carrito
function eliminarCurso(e)
{
	// En cualquier parte del renglon de la compra del "Curso"
	console.log ('Desde EliminarCurso');
	// obtiene el nombre de la clase, cuando se oprime el boton con una "X"
	if (e.target.classList.contains('borrar-curso'))
	{
		// Obtener el "Id" del curso a eliminar.
		const cursoId = e.target.getAttribute ('data-id');
		// Eliminando del arreglo de "articulosCarrito" por el "data-id"
		// Ya no incluye el que se selecciono en el boton Rojo.
		articulosCarrito = articulosCarrito.filter(curso => curso.id !== cursoId);
		//console.log(articulosCarrito);
		carritoHTML(); // Iterar sobre el carrito y mostrar su HTML
		
	}
}


/*
// Variables
const carrito = document.querySelector('#carrito');
const listaCursos = document.querySelector('#lista-cursos');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito'); 
let articulosCarrito = [];

// Listeners
cargarEventListeners();

function cargarEventListeners() {
     // Dispara cuando se presiona "Agregar Carrito"
     listaCursos.addEventListener('click', agregarCurso);

     // Cuando se elimina un curso del carrito
     carrito.addEventListener('click', eliminarCurso);

     // Al Vaciar el carrito
     vaciarCarritoBtn.addEventListener('click', vaciarCarrito);

}




// Funciones
// Función que añade el curso al carrito
function agregarCurso(e) {
     e.preventDefault();
     // Delegation para agregar-carrito
     if(e.target.classList.contains('agregar-carrito')) {
          const curso = e.target.parentElement.parentElement;
          // Enviamos el curso seleccionado para tomar sus datos
          leerDatosCurso(curso);
     }
}

// Lee los datos del curso
function leerDatosCurso(curso) {
     const infoCurso = {
          imagen: curso.querySelector('img').src,
          titulo: curso.querySelector('h4').textContent,
          precio: curso.querySelector('.precio span').textContent,
          id: curso.querySelector('a').getAttribute('data-id'), 
          cantidad: 1
     }


     if( articulosCarrito.some( curso => curso.id === infoCurso.id ) ) { 
          const cursos = articulosCarrito.map( curso => {
               if( curso.id === infoCurso.id ) {
                    curso.cantidad++;
                     return curso;
                } else {
                     return curso;
             }
          })
          articulosCarrito = [...cursos];
     }  else {
          articulosCarrito = [...articulosCarrito, infoCurso];
     }

     // console.log(articulosCarrito)

     

     // console.log(articulosCarrito)
     carritoHTML();
}

// Elimina el curso del carrito en el DOM
function eliminarCurso(e) {
     e.preventDefault();
     if(e.target.classList.contains('borrar-curso') ) {
          // e.target.parentElement.parentElement.remove();
          const cursoId = e.target.getAttribute('data-id')
          
          // Eliminar del arreglo del carrito
          articulosCarrito = articulosCarrito.filter(curso => curso.id !== cursoId);

          carritoHTML();
     }
}


// Muestra el curso seleccionado en el Carrito
function carritoHTML() {

     vaciarCarrito();

     articulosCarrito.forEach(curso => {
          const row = document.createElement('tr');
          row.innerHTML = `
               <td>  
                    <img src="${curso.imagen}" width=100>
               </td>
               <td>${curso.titulo}</td>
               <td>${curso.precio}</td>
               <td>${curso.cantidad} </td>
               <td>
                    <a href="#" class="borrar-curso" data-id="${curso.id}">X</a>
               </td>
          `;
          contenedorCarrito.appendChild(row);
     });

}

// Elimina los cursos del carrito en el DOM
function vaciarCarrito() {
     // forma lenta
     // contenedorCarrito.innerHTML = '';


     // forma rapida (recomendada)
     while(contenedorCarrito.firstChild) {
          contenedorCarrito.removeChild(contenedorCarrito.firstChild);
      }
}
*/

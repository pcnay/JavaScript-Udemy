// Variables

// Se asigna a una variable el "div" con el id=resultado.
const year = document.querySelector('#year'); // Select con Id=year
const marca = document.querySelector('#marca');
const max = new Date().getFullYear(); // Obtiene el año completo y actual
const min = max - 10 ; // Minimo 10 años de antiguedad.
const minimo = document.querySelector('#minimo');
const maximo = document.querySelector('#maximo');
const puertas = document.querySelector('#puertas');
const resultado = document.querySelector('#resultado');
const transmision = document.querySelector('#transmision');
const color = document.querySelector('#color');

// Generar un objeto con la busqueda.
// Es donde se filtraran las busquedas 
const  datosBusqueda = {
	marca :'',
	year :'',
	minimo :'',
	maximo :'',
	puertas :'',
	transmisio :'',
	color : ''
}



// Eventos
// Una vez que se haya cargado por completo llama la funcion.
document.addEventListener('DOMContentLoaded',() => {
	mostrarAutos();
})


// Funciones
// Mostrara los autos que se encuentran en el archivo "db.js"
// Se mostraran en el <div>  con el id="resultados" </div>
function mostrarAutos()
{
	autos.forEach(auto => {
		//Extrae el arreglo y los separa en variables.
		const { marca, modelo, year, puertas, transmision, precio, color } = auto;

		// Crea un parrafo para cada auto.
		const autoHTML = document.createElement('p');
		//autoHTML.textContent = `${marca} ${modelo} - ${year} - ${puertas} - ${transmision} -${precio} - ${color} `;
		autoHTML.textContent = `${marca} ${modelo} ${year} ${puertas} Puertas - Transmision : ${transmision} Precio: ${precio} - Color ${color}` ;

		// insertar en el HTML, lo muestra en el "DIV" (resultado)
		resultado.appendChild(autoHTML);
		llenarSelect();
	})
}

// Gener los años del "Select"
function llenarSelect()
{
	// Ciclo de Mayor a Menor 
	for (let i=max; i>min; i--)
	{
		console.log(i);
		const opcion = document.createElement('option');
		opcion.value = i;
		opcion.textContent = i;
		year.appendChild(opcion); // Agrega las opciones de año al Select.

	}
}

/*

// Selectores
const marca = document.querySelector('#marca');
const year = document.querySelector('#year');
const minimo = document.querySelector('#minimo');
const maximo = document.querySelector('#maximo');
const puertas = document.querySelector('#puertas');
const transmision = document.querySelector('#transmision');
const color = document.querySelector('#color');

// crear los años
const years = document.createElement('option');
const max = new Date().getFullYear();
const min = max - 10;


for(let i = max; i >  min; i--) {
    const option =  document.createElement('option');
    option.value = i;
    option.innerText = i;
    document.querySelector('#year').appendChild(option);
}

// Datos para la busqueda
const datosBusqueda = {
    marca : '',
    year: '',
    minimo : '',
    maximo: '',
    puertas: '',
    transmision:'',
    color:''
}

document.addEventListener('DOMContentLoaded', () => {
    mostrarAutos(autos);
});

// Event Listeners para el formulario
marca.addEventListener('input', e => {
    datosBusqueda.marca = e.target.value;

    // Mandar llamar la función de filtrar Autos
    filtrarAuto();
});

year.addEventListener('input', e => {
    datosBusqueda.year = Number(e.target.value);
    // Mandar llamar la función de filtrar Autos
    filtrarAuto();
});

minimo.addEventListener('input', e => {
    datosBusqueda.minimo = Number(e.target.value);
    // Mandar llamar la función de filtrar Autos
    filtrarAuto();
});


maximo.addEventListener('input', e => {
    datosBusqueda.maximo = Number(e.target.value);
    // Mandar llamar la función de filtrar Autos
    filtrarAuto();
});


puertas.addEventListener('input', e => {
    datosBusqueda.puertas = Number(e.target.value);
    // Mandar llamar la función de filtrar Autos
    filtrarAuto();
});

transmision.addEventListener('input', e => {
    datosBusqueda.transmision = e.target.value
    // Mandar llamar la función de filtrar Autos
    filtrarAuto();
});

color.addEventListener('input', e => {
    datosBusqueda.color = e.target.value
    // Mandar llamar la función de filtrar Autos
    filtrarAuto();
});

function limpiarHTML() {
    // Leer el elemento Resultado
    const contenedor = document.querySelector('#resultado');

    // limpiar los resultados anteriores
    while(contenedor.firstChild) {
        contenedor.removeChild(contenedor.firstChild);
    }
}

function mostrarAutos(autos){
    limpiarHTML();

    // Leer el elemento Resultado
    const contenedor = document.querySelector('#resultado');

    // Construir el HTML de los autos
    autos.forEach(auto => {
        const autoHTML = document.createElement('p');
        autoHTML.innerHTML = `
            <p>${auto.marca} ${auto.modelo} - ${auto.year} - ${auto.puertas} Puertas - Transmisión: ${auto.transmision} - Precio: ${auto.precio} - Color: ${auto.color}</p>
        `;
        contenedor.appendChild(autoHTML);
    })
}
function noResultado() {
    limpiarHTML();

    const noResultado = document.createElement('div');
    noResultado.classList.add('alerta', 'error');
    noResultado.appendChild(document.createTextNode('No hay Resultados'));
    document.querySelector('#resultado').appendChild(noResultado);
}

function filtrarAuto() {
   const resultado = autos.filter(filtrarMarca).filter(filtrarYear).filter(filtrarMinimo).filter(filtrarMaximo).filter(filtrarPuertas).filter(filtrarTransmision).filter(filtrarColor);

//    console.log(resultado);
   if(resultado.length){
        mostrarAutos(resultado);
   } else {
       noResultado();
   }
}


// Aplica los filtros
function filtrarMarca(auto) {
    if(datosBusqueda.marca){
        return auto.marca === datosBusqueda.marca;
    } 
    return auto;
}
function filtrarYear(auto) {
    if(datosBusqueda.year){
        return auto.year === datosBusqueda.year;
    }
    return auto;
}

function filtrarMinimo(auto) {
    if(datosBusqueda.minimo){
        return auto.precio >= datosBusqueda.minimo;
    }
    return auto;
}
function filtrarMaximo(auto) {
    if(datosBusqueda.maximo){
        return auto.precio <= datosBusqueda.maximo;
    }
    return auto;
}
function filtrarPuertas(auto) {
    if(datosBusqueda.puertas){
        return auto.puertas === datosBusqueda.puertas;
    }
    return auto;
}

function filtrarTransmision(auto) {
    if(datosBusqueda.transmision){
        return auto.transmision === datosBusqueda.transmision;
    } 
    return auto;
}

function filtrarColor(auto){
    if(datosBusqueda.color){
        return auto.color === datosBusqueda.color;
    } 
    return  auto;
}
*/


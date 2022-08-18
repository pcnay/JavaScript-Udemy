// No siempre estarás haciendo traversing a tu dom, 

const btnFlotante = document.querySelector('.btn-flotante');
const footer = document.querySelector('.footer');

// Agregando un evento
// Tiene una función anonima
/*
btnFlotante.addEventListener('click',()=>{
	console.log('Click en el boton');
});
*/

btnFlotante.addEventListener('click',mostrarOcultarFooter);

function mostrarOcultarFooter()
{
	// Revisa si existe la clase "activo"
	if (footer.classList.contains('activo'))
	{
		footer.classList.remove('activo');
		//btnFlotante.classList.remove('activo');
		// Hace referencia al objeto que lo llama
		this.classList.remove('activo');
	}
	else
	{
		footer.classList.add('activo');
		//btnFlotante.classList.add('activo');
		// Hace referencia al objeto que lo llama
		this.classList.add('activo');
	}

	// console.log('Click en el boton');
	console.log(footer.classList);
	
}

/*
const btnFlotante = document.querySelector('.btn-flotante');


const footer = document.querySelector('.footer');

btnFlotante.addEventListener('click', mostrarOcultarFooter);

function mostrarOcultarFooter() {
    if( footer.classList.contains('activo') ) {
        footer.classList.remove('activo');
        this.classList.remove('activo');
        this.textContent = 'Idioma y Moneda';
    } else {
        footer.classList.add('activo');
        this.classList.add('activo');
        this.textContent = 'X Cerrar';
    }
}

*/


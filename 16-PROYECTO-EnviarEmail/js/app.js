// variables
const btnEnviar = document.querySelector('#enviar');

const btnReset = document.querySelector('#resetBtn');
// Es el "id" del formulario, se utilizara para agregar un mensaje de error
const formulario = document.querySelector('#enviar-mail');

// Variables para campos, que se utilizaran en para las validaciones.
const email = document.querySelector('#email');
const asunto = document.querySelector('#asunto');
const mensaje = document.querySelector('#mensaje');

const er = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

eventListeners();

function eventListeners()
{
	// Cargue el documento por primera Vez.
	document.addEventListener('DOMContentLoaded', iniciarApp);

	// Campos del formulario.
	// "blur" = Cuando sale de la etiqueta "email", en tiempo real ya que es para el Usuario  y backend mas efectiva este tipo de validacion.
	email.addEventListener('blur',validarFormulario);
	asunto.addEventListener('blur',validarFormulario);
	mensaje.addEventListener('blur',validarFormulario);

	// Resetea el formulario
	btnReset.addEventListener('click',resetearFormulario);

	// Cuando se oprime "Submit", se asigna un evento.
	formulario.addEventListener('submit',enviarEmail);


}

// funciones
function iniciarApp()
{
	//console.log("Iniciando ...");
	btnEnviar.disabled = true;
	// Es una clase de Taildwin
	btnEnviar.classList.add('cursor-not-allowed','opacity-50');
}

// Validando el formulario.
function validarFormulario(e)
{
	// console.log	('Validando ...');
	//console.log(e.target.value);
	if (e.target.value.length > 0)
	{
		//console.log('Contiene datos');	
		// Seleccionando el parrafo "error"
		const error = document.querySelector('p.error');

		if (error)
		{
			// Para remover los mensajes de error, para que no se dupliquen
			error.remove();		
		}


		e.target.classList.remove('border', 'border-red-500');
		e.target.classList.add('border', 'border-green-500');
	}
	else
	{
		// console.log ('NO contiene datos');		
		// Cuando este vacia muestra un recuadro "Rojo"
		// Agregando codigo CSS a la etiqueta de "Email"
		// e.target.style.borderBottomColor = 'red';
		// Agregando clases de "Taildwild"
		e.target.classList.remove('border', 'border-green-500');
		e.target.classList.add('border', 'border-red-500');
		mostrarError("Todos los campos son obligatorios");
	} //function validarFormulario(e)

	if (e.target.type === 'email')
	{
		// console.log("Es un Email");
		// Realizando algunas validaciones de pruebas
		// Busca en la cadena el caracter "@"

		if (er.test(e.target.value)) 
		{
			// Seleccionando el parrafo "error"
			const error = document.querySelector('p.error');
			
			if (error)
			{
				// Para remover los mensajes de error, para que no se dupliquen
				error.remove();		
			}

			e.target.classList.remove('border', 'border-red-500');
			e.target.classList.add('border', 'border-green-500');
		}
		else 
		{
			// Agregando clases de "Taildwild"
			e.target.classList.remove('border', 'border-green-500');
			e.target.classList.add('border', 'border-red-500');			
			mostrarError("Email NO Válido");	
		}
	}

	if (er.test(email.value) && asunto.value !== '' && mensaje.value !== '')
	{
		//console.log ('Pasastes la validacion.');
		btnEnviar.disabled = false;
		// Es una clase de Taildwin
		btnEnviar.classList.remove('cursor-not-allowed','opacity-50');
	}
	
}

function mostrarError(mensaje)
{
	// console.log('Error .....');
	const mensajeError = document.createElement('p');
	mensajeError.textContent = mensaje; //'Todos los campos son obligatorios';
	mensajeError.classList.add('border','border-red-500','background-color-100','text-red-500','p-3','mt-5','text-center','error');

	// Para evitar que se este repitiendo el mensaje de error.
	// Solo en "querySelectorAll" existe el metodo "length"
	const errores = document.querySelectorAll('.error');
	if (errores.length === 0)
	{
		// se esta agregando el parrafo con el texto y las clases de Taildwild asignadas.
		formulario.appendChild (mensajeError);
		// Si se quiere colocar el mensaje en la parte de arriba.
		// ".mb-10" = Es el nombre de la clase de la etiqueta
		//formulario.insertBefore (mensajeError,document.querySelector('.mb-10'));
	}

	
}


function enviarEmail(e)
{
	e.preventDefault();
	// console.log("Enviando ...");
	// Mostrando el "Spinner", se encuentra oculto con CSS.
	const spinner = document.querySelector('#spinner');
	spinner.style.display = 'flex';

	// Despues de 3 segundos ocultar el spinner y mostrar el mensaje.
	
	setTimeout(() => {
		// console.log ('Esta función se ejecuta despues de 3 segundos.')
		// Ocultando el Spinner despues de 3 segundos que se muestra		
		spinner.style.display = 'none';

		// Mostrando un mensaje "Se envio correctamente".
		const parrafo = document.createElement('p');
		parrafo.textContent = 'El mensaje se envio correctamente';

		// Agregando unas clases de Thinder, desplegara un recuadro verde.
		parrafo.classList.add('text-center','my-10','p-2','bg-green-500','text-white','font-bold','uppercase');

		// Inserta el parrafo antes del Spinner
		formulario.insertBefore(parrafo,spinner);

		// Para borrar el parrafo antes desplegados
		setTimeout(() => {
			parrafo.remove();
			resetearFormulario();
		},5000);
		
	},3000);

	// Funcion que resetea el formulario.
	function resetearFormulario()
	{
		formulario.reset();
		iniciarApp();
	}

/*
	// Este código se repite cada 3 segundos.
	setInterval(() => {
		console.log ('Esta función se ejecuta cada 3 segundos. ')
	},3000)
*/

}

/*
const email = document.querySelector('#email');
const asunto = document.querySelector('#asunto');
const mensaje = document.querySelector('#mensaje');

const btnEnviar = document.querySelector('#enviar');
const formularioEnviar = document.querySelector('#enviar-mail');
const resetBtn = document.querySelector('#resetBtn');

// event Listener

eventListeners();

function eventListeners() {
     // Inicio de la aplicación y deshabilitar submit
     document.addEventListener('DOMContentLoaded', inicioApp);

     // Campos del formulario
     email.addEventListener('blur', validarFormulario);
     asunto.addEventListener('blur', validarFormulario);
     mensaje.addEventListener('blur', validarFormulario);

     // Boton de enviar en el submit
     formularioEnviar.addEventListener('submit', enviarEmail);

     // Boton de reset
     resetBtn.addEventListener('click', resetFormulario);
}



// funciones
function inicioApp() {
     // deshabilitar el envio
     btnEnviar.disabled = true;
     btnEnviar.classList.add('cursor-not-allowed', 'opacity-50')
}


// Valida que el campo tengo algo escrito

function validarFormulario(e) {
    
     if(e.target.value.length > 0 ) {
          campo.style.borderBottomColor = 'green';
          campo.classList.remove('error');
     } else {
          e.target.classList.add('border', 'border-red-500');
     }



     // Validar unicamente el email
     if(this.type === 'email') {
          validarEmail(this);
     }


     if(email.value !== '' && asunto.value !== '' && mensaje.value !== '' ) {
        btnEnviar.disabled = false;
        btnEnviar.classList.remove('opacity-50');
        btnEnviar.classList.remove('cursor-not-allowed');
     }
}

// Resetear el formulario 
function resetFormulario(e) {
     formularioEnviar.reset();
     e.preventDefault();
}

// Cuando se envia el correo
function enviarEmail(e) {

    e.preventDefault();


     // Spinner al presionar Enviar
     const spinner = document.querySelector('#spinner');
     spinner.style.display = 'flex';

     // Gif que envia email
     const enviado = document.createElement('p');
     enviado.textContent = 'Mensaje Enviado Correctamente';
     enviado.classList.add('bg')

     // Ocultar Spinner y mostrar gif de enviado
     setTimeout( () => {
          spinner.style.display = 'none';

          document.querySelector('#loaders').appendChild( enviado );

          setTimeout(() =>  {
               enviado.remove();
               formularioEnviar.reset();
          }, 5000);
     }, 3000);

     
}



function validarEmail(campo) {
     const mensaje = campo.value;

     const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
     
     if( re.test(mensaje.toLowerCase()) ) {
          campo.style.borderBottomColor = 'green';
          campo.classList.remove('error');
     } else {
          campo.style.borderBottomColor = 'red';
          campo.classList.add('error');
     }
}
*/

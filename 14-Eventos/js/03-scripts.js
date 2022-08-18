// En este video estaremos viendo eventos que suceden con el teclado, es decir cuando el usuario escribe en un input...

// keydown  - cuando presionas una tecla 
// keyup - Cuando sueltas la tecla...
// blur - cuando sales del input - ideal para validación...
// También hay eventos para cortar copiar y pegar

// cut
// copy
// paste
// input - cuando se ejecutan todas las que aquí se muestran... incluyendo cortar, pegar y copiar

const busqueda = document.querySelector('.busqueda');

// event = Puede ser cualquier nombre, pero por convención se utiliza "e", "event".
busqueda.addEventListener('input',(event) => {
	if (event.target.value === '')
	{
		console.log("Fallo la validacion")		
	}
	
	// console.log(event.type); // El tipo de Evento.
	// console.log(event.target); // Lo que contiene el "input"
	// console.log(event.target.value); // Muestra lo que se esta escribiendo, en el "Input"
	// Se utilizan para entrada de datos para API.
	// Tambien se utiliza para validaciones.


})





/*
busqueda.addEventListener('keydown', () => {
	console.log('Escribiendo');
});

busqueda.addEventListener('keyup', () => {
	console.log('El eventos se lanza cuando se suelta la tecla');
});


// Ideal para validaciones de formulario.
busqueda.addEventListener('blur', () => {
	console.log('El eventos se lanza cuando se sale del Input');
});

*/

busqueda.addEventListener('copy', () => {
	console.log('Cuando se copia el texto en la etiqueta con CTRL+C ');
});

busqueda.addEventListener('paste', () => {
	console.log('Cuando se pegue el texto en la etiqueta con CTRL+V ');
});

busqueda.addEventListener('cut', () => {
	console.log('Cuando se corta el texto en la etiqueta con CTRL+X ');
});

// Pasandole el evento a la Arrow Function
// console.log('Funciona como -Copy, paste, cut-, excepto -blur-');
busqueda.addEventListener('input', (evento) => {
	console.log('Lo que contiene -evento- ',evento);
});



/*

// tenemos un formulario 

const busqueda = document.querySelector('.busqueda');

// busqueda.addEventListener('input', () => {
//     console.log('escribiendo...');
// })




// Ahora, no tiene mucha utilidad enviar a la consola un mensaje no? lo ideal seria saber el texto que se escribe o poderlo leer...

// busqueda.addEventListener('input', e => {
//     console.log(e); // Mucha información...
//     console.log( e.type ); // Te dira sobre que elemento estamos trabajando...
//     console.log(e.target); // el input completo...

//     console.log(e.target.value) // lo que el usuario escribe...

// })

// También puede ser como función...


busqueda.addEventListener('input',  leerInput);

function leerInput(e) {
    console.log(e); // Mucha información...
    console.log( e.type ); // Te dira sobre que elemento estamos trabajando...
    console.log(e.target); // el input completo...
    console.log(e.target.value) // lo que el usuario escribe...

}
*/


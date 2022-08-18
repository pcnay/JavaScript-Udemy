// Veamos los eventos para un formulario, básicamente es uno pero es muy importante y merecia su propio video...

// Cuando envias un formulario usualmente lo que este en el action, es la página que se abre...

// 
const formulario = document.querySelector('#formulario');
// "submit" = Este eventos sucede cuando se hace click izq en el boton definido como "submit"
// Por defecto el "Submit" ejecuta la funcion que se encuentra en "action"
// <form action="/buscador" method="POST" 
formulario.addEventListener('submit', validarFormulario);

//formulario.addEventListener('submit', (e) => {
	// Si no se coloca "preventDefault" se ejecuta por defecto, es decir que envie los datos por vía POST o GET depende lo que se defina en Actions.

	/*
	e.preventDefault();
	
	console.log(e); // Se muestra todos los eventos que tiene el formulario.
	console.log(e.target.method); // Muestra el tipo de "metodo "
	console.log(e.target.action); // Que va a ejecutar.

})
	*/

// Utilizando Declaración de funcion.
// Se agrega el parámetro para "event", no se requiere en donde se define la funcion.
function validarFormulario(e)
{
	e.preventDefault();
	
	console.log(e); // Se muestra todos los eventos que tiene el formulario.
	console.log(e.target.method); // Muestra el tipo de "metodo "
	console.log(e.target.action); // Que va a ejecutar.
}

/* 
const formulario = document.querySelector('.formulario');


formulario.addEventListener('submit', e => {

    e.preventDefault(); // PreventDefault es evitar que el navegador realice la acción por default, en este caso ir al action...


    // Usualmente utilizaras preventDefault para validar el formulario antes de enviarlo a un servidor

    // Crear consultas Ajax entre otras cosas

    console.log('enviando...');


    // Mucha información valiosa en este e...
    console.log(e);

    console.log(e.target.method)
    console.log(e.target.action)
})

*/
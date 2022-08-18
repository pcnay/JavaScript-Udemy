// Otra opción que a mi me gusta mucho es aplicar algo llamado delegation..

const cardDiv = document.querySelector('.card');

cardDiv.addEventListener('click', e => {
	//console.log (e.target);	// Para que obtenga que etiqueta se realiza el click.
	// console.log (e.target.classList);

	// Delegation = Se agrega código solamente cuando se hace click en especifico 
	
	// Para obtener el nombre de la clase.
	if (e.target.classList.contains('titulo'))
	{
		console.log ('Diste click en titulo');
	}

	if (e.target.classList.contains('precio'))
	{
		console.log ('Diste click en precio');
	}

	if (e.target.classList.contains('card'))
	{
		console.log ('Diste click en Card');
	}


});


/*
const cardDiv = document.querySelector('.card');

cardDiv.addEventListener('click', e => {
    if(e.target.classList.contains('titulo')) {
        console.log('click titulo');
    }
    if(e.target.classList.contains('info')) {
        console.log('click info');
    }
});
*/
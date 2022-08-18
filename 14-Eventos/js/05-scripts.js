// En este video estaremos viendo eventos que suceden con el scroll del sitio web...

// Es muy común que muchos sitios agreguen funcionalidad de que al dar scroll y llegar a ver un elemento este tenga alguna animación, eso se hace con eventos en el mouse..

// El evento "scroll" es global, es decir a nivel de "window"
window.addEventListener('scroll',() => {
	//const scrollPX = window.scrollY
	//console.log ("Scrolling");
	//console.log ("Scroll X tanto cuando Sube o Baja ",scrollPX);

	// Muestra cuantos pixeles se requieren para llegar a esta clase ".premium"
	const premium = document.querySelector ('.premium');
	const ubicacion = premium.getBoundingClientRect(); // En que posicion se encuentra un elemento.
	if (ubicacion.top < 700)
	{
		console.log ("El elementos ya esta visible");
	}
	else
	{
		console.log ("Aun no, da mas Scroll");
	}
	
});



/*
window.addEventListener('scroll', () => {
    // console.log('scrolling...');

    // Detectar el Scrolling vertical...

    // const pxScroll = window.scrollY;
    // console.log(pxScroll);



    // Detectar un elemento al dar scroll...

    const premium = document.querySelector('.premium');

    const ubicacion = premium.getBoundingClientRect(); // Este método te da el tamaño de un elemento y su ubicación respecto a la ubicación actual..
        // console.log(ubicacion);

    if(ubicacion.top < 100) {
        console.log('Ya esta visible');
    } else {
        console.log('Aún no esta visible..')
    }


})
*/

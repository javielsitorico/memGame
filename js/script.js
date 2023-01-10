for(carta of $('.carta-contenedor')) {
     $(carta).bind('click', function() {
          darLaVuelta($(this));
     });
}

function darLaVuelta(carta) {
     if(!carta.hasClass('.carta-contenedor-volteado')) {
          carta.toggleClass('carta-contenedor-volteado');    
     }
}
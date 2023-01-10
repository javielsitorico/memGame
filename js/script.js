let parejaActual = []
let parejasConseguidas = 0;
let parejas = [
     ['rayo-1', 'rayo-2'],
     ['avion-1', 'avion-2'],
     ['balon-1', 'balon-2'],
]

for(let carta of $('.carta-contenedor')) {
     $(carta).bind('click', function() {
          revelar($(this));
     });
}

function revelar(carta) {
     if(!carta.hasClass('carta-contenedor-volteado')) {
          carta.toggleClass('carta-contenedor-volteado');
          parejaActual.push(carta.attr('id'));
          if(parejaActual.length == 2) comprobarParejas();
     }
}

function comprobarParejas() {
     for (let pareja in parejas) {
          if (parejas[pareja].sort().join(',') == parejaActual.sort().join(',')) {
               parejas.splice(pareja, 1)
          }
     }
     parejaActual = [];
     // console.log(parejas);
     console.log(parejas);
     if(parejas.length == 0) {
          console.log('ganaste');
     }
}

// elemento.effect( "shake" ); --> Efecto para cuando falle al adivinar
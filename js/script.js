let cartas = [];
let cartasReordenadas = [];
let parejaActual = []
let parejasConseguidas = 0;
let parejas = [
     ['rayo-1', 'rayo-2'],
     ['avion-1', 'avion-2'],
     ['balon-1', 'balon-2'],
]

function reordenarCartas() {
     $('.tablero').children().each(function() {
          cartas.push($(this));
          $(this).remove();
     });
     cartasReordenadas = cartas.sort((a, b) => 0.5 - Math.random());
     console.log(cartasReordenadas);
     $('.tablero').append(cartas);
     asociarRevelar();
}

function asociarRevelar() {
     for(let carta of $('.carta-contenedor')) {
          $(carta).bind('click', function() {
               revelar($(this));
          });
     }
}

function revelar(carta) {
     if(!carta.hasClass('carta-contenedor-volteado')) {
          carta.toggleClass('carta-contenedor-volteado');
          parejaActual.push(carta.attr('id'));
          if(parejaActual.length == 2) comprobarParejas();
     }
}

function comprobarParejas() {
     let parejaEncontrada = false;
     for (let pareja in parejas) {
          if (parejas[pareja].sort().join(',') == parejaActual.sort().join(',')) {
               parejas.splice(pareja, 1);
               parejaEncontrada = true;
               break;
          }
     }

     if(!parejaEncontrada) {
          parejaIncorrecta();
     }

     parejaActual = [];

     if(parejas.length == 0) {
          $('#modal-victoria').css("display","block")
     }
}

function parejaIncorrecta() {
     let parejaVoltear = parejaActual;
     setTimeout(() => {
          for (let carta of parejaVoltear) {
               $('#'+carta).toggleClass('carta-contenedor-volteado');
               setTimeout(() => {
                    $('#'+carta).effect('shake', {times: 2, distance: 5}, 200);
               }, 800);
          }
     }, 800);
     
}

function reiniciarJuego() {
     for(let carta of $('.carta-contenedor')) {
          if($(carta).hasClass('carta-contenedor-volteado')) {
               $(carta).toggleClass('carta-contenedor-volteado');
          }
     }
     setTimeout(() => {
          $('#modal-victoria').fadeOut()
          reordenarCartas();
     }, 800)
     parejaActual = []
     parejasConseguidas = 0;
     parejas = [
          ['rayo-1', 'rayo-2'],
          ['avion-1', 'avion-2'],
          ['balon-1', 'balon-2'],
     ]
     
}

reordenarCartas();

// $('#boton-cerrar-modal').click(() => $('#modal-victoria').css("display","none"));

$('#boton-jugar-de-nuevo').bind('click', reiniciarJuego);
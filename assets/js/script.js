$(window).on('load', function() {
	$(".loader").fadeOut(); 
	$("#preloder").delay(400).fadeOut("slow");
});

// Ocultar div de todos los contenidos
$('.contenedor-mas .button-mas').on('click', function(e){
  e.preventDefault();
  $(this).text( $(this).text() == "¿Ver más?" ? "¿Menos?" : "¿Ver más?" );
  $(this).closest('div.habilidades').find('.contenido-oculto').slideToggle()
})

// Funcion para la salida del hero principal
consoleText(['Desarrollador de software', 'Diseñador web', 'Diseñador gráfico', 'Diseñador móvil', 'Programador'], 'text',[]);
function consoleText(words, id, colors) {
  if (colors === undefined) colors = ['#fff'];
  var visible = true;
  var con = document.getElementById('console');
  var letterCount = 1;
  var x = 1;
  var waiting = false;
  var target = document.getElementById(id)
  target.setAttribute('style', 'color:' + colors[0])
  window.setInterval(function() {

    if (letterCount === 0 && waiting === false) {
      waiting = true;
      target.innerHTML = words[0].substring(0, letterCount)
      window.setTimeout(function() {
        var usedColor = colors.shift();
        colors.push(usedColor);
        var usedWord = words.shift();
        words.push(usedWord);
        x = 1;
        target.setAttribute('style', 'color:' + colors[0])
        letterCount += x;
        waiting = false;
      }, 1000)
    } else if (letterCount === words[0].length + 1 && waiting === false) {
      waiting = true;
      window.setTimeout(function() {
        x = -1;
        letterCount += x;
        waiting = false;
      }, 1000)
    } else if (waiting === false) {
      target.innerHTML = words[0].substring(0, letterCount)
      letterCount += x;
    }
  }, 120)
  window.setInterval(function() {
    if (visible === true) {
      con.className = 'console-underscore hidden'
      visible = false;

    } else {
      con.className = 'console-underscore'

      visible = true;
    }
  }, 400)
}

$('.owl-carousel').owlCarousel({
  loop: true,
  center:true,
  margin: 0,
  nav: true,
  navText: [
    "<i class='fa fa-caret-left'></i>",
    "<i class='fa fa-caret-right'></i>"
  ],
  autoplay: true,
  autoplayHoverPause: true,
  animateOut: 'slideOutDown',
  animateIn: 'flipInX',
  autoWidth:true,
  responsive: {
    0: {
      items: 1
    },
    400: {
      items: 2
    },
    600: {
      items: 3
    },
    1000: {
      items: 5
    }
  }
})

// $('.owl-carousel').owlCarousel({
//     margin:10,
//     loop:true,
//     autoWidth:true,
//     items:4
// })
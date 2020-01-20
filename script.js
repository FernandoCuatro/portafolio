$('.owl-carousel').owlCarousel({
 loop: true,
 center:true,
 margin: 10,
 nav: true,
 navText: [
   "<i class='fas fa-angle-left'></i>",
   "<i class='fas fa-angle-right'></i>"
 ],
 autoplay: true,
 autoplayHoverPause: true,
 animateOut: 'slideOutDown',
 animateIn: 'flipInX',
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

consoleText(['Programador de software', 'Diseñador web', 'Diseñador gráfico', 'Diseñador móvil'], 'text',['white','white','white']);

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
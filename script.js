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
$(document).ready(function(){
   $('.carousel').carousel({ full_width: true });
   $('.scrollspy').scrollSpy({
     offsetTop: -200,
     scrollParent: window
   });
   $('.button-left').click(function (ev) {
     ev.preventDefault();
     $('.carousel').carousel('prev');
   });
   $('.button-right').click(function (ev) {
     ev.preventDefault();
     $('.carousel').carousel('next')
   });
   $('.button-down').fadeIn(500);
 });

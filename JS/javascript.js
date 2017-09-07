$(document).ready(function(){
  $(this).scrollTop(0);
});

//effects on NAV BAR

$(window).scroll(function() {
  if ($(document).scrollTop() > 50) {
    $('nav').addClass("small");
  } else {
    $('nav').removeClass("small");
  }
});

$(window).scroll(function() {
  var sc = $(document).scrollTop();
  $(".row" + (sc > 1000 ? 3 : sc > 600 ? 2 : sc > 200 ? 1 : 0)).fadeIn(); 
//   if ($(document).scrollTop() > 1000) {  
//     $(".row3").fadeIn(); 
// } else if ($(document).scrollTop() > 600) {
//     $('.row2').fadeIn();
// } else if ($(document).scrollTop() > 200) {
//     $('.row1').fadeIn();
// }
});



// effects on main article paragraph section


  $(document).ready(function(){
    $("article").hover(function(){
      $("#pp").fadeIn(1000);
    }, function(){
      $("#pp").fadeOut();
    });
  });


// effects on header qoute section


$(document).ready(function(){

var classes = [
  'Čini dobro, pa u more baci. Ako riba ne zna, znat će Bog.',
  'I shvatiš: samo se onaj ko je imun na stvarnost nikada neće razboljeti od rđe i venjenja.',
  'Slučajnosti ne postoje. Svi smo mi marionete vlastitih podsvjesnih želja.',  
  'Život oblikuješ oko onog što imaš, ne oko onog što nemaš.',
];

(function displayClass(i) {
  $('#headerNote p').text(classes[i]).fadeIn(1000, function() {
      $(this).delay(3500).fadeOut(1000, function() {
          displayClass((i + 1) % classes.length);
      });
  });
})(0);

});




// "Show more" button effect


// $(document).ready(function(){
//   $("#clickShow, #clickShow1").click(function(){
//       var currentVal = $(this).val();

//       $("#cw" + currentVal).toggleClass("showLess");
//       if($(this).text() === "Show more"){
//         $(this).text("Show less");
//       } else {
//       $(this).text("Show more");
//       }
//   });
// });


$(document).ready(function(){
  $(".clickShow").click(function() {
    $(this).parents(".cw").toggleClass("showLess");
      if ($(this).text() === "Show more") {
      $(this).text("Show less");
    } else {
      $(this).text("Show more");
    }
  });
});
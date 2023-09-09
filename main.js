$(document).ready(function () {
    let aside = $("aside");
    let contenido = $(".contenido");
    let links = $(".links_aside").find("a").find("h3");
    links.toggleClass("desaparecer_links");
    
   
   

   
    $(".menu").click(function (e) { 
        e.preventDefault();

/*let aside = $("aside");
let contenido = $(".contenido");
let links = $(".links_aside").find("a").find("h3");

aside.toggleClass("trasladar_aside");
contenido.toggleClass("empujar_contenido");
links.toggleClass("desaparecer_links");*/
aside.toggleClass("trasladar_aside");

contenido.toggleClass("empujar_contenido");



        
    });




$(".menu2").click(function (e) { 
    e.preventDefault();
    $(".menu_oculto1").toggleClass("trasladar_menu2");
});

$(".equis").click(function (e) { 
    e.preventDefault();
    $(".menu_oculto1").toggleClass("trasladar_menu2");
});




$(".hover_album").hide();


$(".card_album").hover(function () {
    // over
    $(this).find(".hover_album").fadeIn(500);
    
  }, function () {
    // out
    $(this).find(".hover_album").fadeOut(500);
  }
);



$(".fondo_cargando").fadeOut(2000);












});
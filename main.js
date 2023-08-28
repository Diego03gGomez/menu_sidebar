$(document).ready(function () {
   
    $(".menu").click(function (e) { 
        e.preventDefault();

let aside = $("aside");
let contenido = $(".contenido");
let links = $(".links_aside").find("a").find("h3");

aside.toggleClass("trasladar_aside");
contenido.toggleClass("empujar_contenido");
links.toggleClass("desaparecer_links");

        
    });




$(".menu2").click(function (e) { 
    e.preventDefault();
    $(".menu_oculto1").toggleClass("trasladar_menu2");
});

$(".equis").click(function (e) { 
    e.preventDefault();
    $(".menu_oculto1").toggleClass("trasladar_menu2");
});



});
$(document).ready(function () {
    let aside = $("aside");
    let contenido = $(".contenido");
    let links = $(".links_aside").find("a").find("h3");
    links.toggleClass("desaparecer_links");

    $(".fondo_input").fadeOut();

$(".buscar").click(function (e) { 
    e.preventDefault();
    $(".fondo_input").fadeIn();
$(".menu_oculto1").removeClass("trasladar_menu2");


});

$(".cerrar").click(function (e) { 
    e.preventDefault();
    $(".fondo_input").fadeOut();
});

   


    
  $(".hover_card").hide();
 
  $(".card").hover(function () {
        // over
     $(this).find(".hover_card").fadeIn(50);
    }, function () {
        // out
        $(".hover_card").fadeOut(50);
    }
  );





   

   
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












/*CODIGO PARA CONSUMIR LA OTRA API*/
const settings = {
	async: true,
	crossDomain: true,
	url: 'https://spotify23.p.rapidapi.com/albums/?ids=3IBcauSj5M2A6lTeffJzdv',
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '70454a15c3mshc3b81faa31ca721p19510ejsnafb5d5faa7f4',
		'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
	}
};

$.ajax(settings).done(function (response) {
let	arreglo = response.albums[0].tracks.items;


$.each(arreglo, function (indexInArray, e) { 
     console.log(e)

     $(".cont_musica").append(`<a target="_blank" href=${e.uri}> 
     <h4><i class="fa-solid fa-play"></i></h4>
     
     <h4>${e.name}</h4>
     


    
     
     </a>`);


    });

  


   $(".cont_musica").hide();

























   
   /*CODIGO PARA OCULTAR O MOSTRAR EL CONTENEDOR SEGUN DE LE HAGA CLICK O NO AL INPUT */
   $("#filtro").click(function (e) {
    e.stopPropagation();
});

$(document).click(function () {
    $(".cont_musica").hide();
});

$("#filtro").focus(function () {
    $(".cont_musica").show();
});











/*CODIGO PARA EL FILTRADO */
     // Agrega un evento input al input de filtro
$("#filtro").on("input", function () {
    // Obtén el valor actual del input
    var filtro = $(this).val().toLowerCase();

    // Vacía el contenedor de música
    $(".cont_musica").empty();





    // Filtra y muestra los elementos que coinciden con el filtro
    $.each(arreglo, function (index, e) {
        var nombreCancion = e.name.toLowerCase();
        if (nombreCancion.includes(filtro)) {
            $(".cont_musica").append(`<a target="_blank" href=${e.uri}> 
            <h4><i class="fa-solid fa-play"></i></h4>
            
            <h4>${e.name}</h4>
            
       
       
           
            
            </a>`);
        }
    });

        
});







});


























});
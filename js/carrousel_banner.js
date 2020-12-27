// array de 2 niveles , carrousel cambia imagen y vinculo a pagina
var grupoBanners = [];

grupoBanners[0]=['https://articulo.mercadolibre.com.ar/MLA-900680458-set-magnetico-para-scrum-y-kanban-premium-plan-_JM','images/banner0.png'];
grupoBanners[1]=['https://articulo.mercadolibre.com.ar/MLA-900682051-combo-pizarra-blanca-magnetica-60x45-set-premium-_JM','images/banner1.png'];
grupoBanners[2]=['https://articulo.mercadolibre.com.ar/MLA-900678482-planner-magnetico-home-edition-standard-plan-_JM','images/banner2.png'];
grupoBanners[3]=['https://articulo.mercadolibre.com.ar/MLA-900680453-planner-magnetico-home-edition-premium-plan-_JM','images/banner3.png'];
grupoBanners[4]=['https://articulo.mercadolibre.com.ar/MLA-900681227-combo-pizarra-blanca-magnetica-60x45-set-basico-_JM','images/banner4.png'];

var links = document.getElementById('links');
var imagenes = document.getElementById('imagen');

links.href = grupoBanners[0][0];
imagenes.src = grupoBanners[0][1];

var indice = 0;

function actualizarBanner() {
	indice++
	if (indice > 4) { //se puede usar el .lenght (ojo sintaxis)
		indice = 0;
	}
	links.href = grupoBanners[indice][0];
	imagenes.src = grupoBanners[indice][1];
}

setInterval (actualizarBanner, 2500);

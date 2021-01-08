var animation = bodymovin.loadAnimation({
    container: document.getElementById('catAnimation'),
        
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'js/cat.json'
        
    // el path debe ser el mismo que el archivo de la animacion con extension SVG's JSON  //
    })
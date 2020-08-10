$$(document).on('page:init', '.page[data-name="favoritosDormir"]', function (e) {
    // run createContentPage func after link was clicked
    $$('.create-page').on('click', function () {
        createContentPage();
    });

    localStorage.removeItem('tituloItem');

    var favoritosStorage = localStorage.getItem("favoritosDormir");
    var arrayFavoritos = favoritosStorage.split(',');
    var quantidade = arrayFavoritos.length;

    var titulos;
    var qtd = 0;

    for (var count = 0; count < quantidade; count = count + 1) {
        if (qtd == 0) {
            titulos = "'" + arrayFavoritos[count] + "'";
            qtd = qtd + 1;
        } else {
            titulos = titulos + " OR tb02_titulo='" + arrayFavoritos[count] + "'";
            qtd = qtd + 1;
        }
    }

    $.get(link + "favoritosdormirjson.php?titulos=" + titulos, function (data, status) {

        var dados;
        var conteudo;
        var cont;

        conteudo = data.toString();
        dados = JSON.parse(conteudo);

        $('.backLoad').fadeOut(function () {
            for (cont = 0; cont < dados.length; cont++) {
                $$('#item_fav_dormir').append('<div class="card dormir demo-card-header-pic" data-num-item="' + (cont + 1) + '">' +
                    '  <div style="background-image:url(' + dados[cont].imagem + ')" class="card-header align-items-flex-end"></div>' +
                    '  <div class="card-content card-content-padding">' +
                    '    <div class="floating center" data-titulo="'+ dados[cont].titulo +'">' + dados[cont].titulo + '</div>' +
                    '    <p>' + dados[cont].descricao + '</p>' +
                    '  </div>' +
                    '  <div class="card-footer"><a href="/ondedormircont/" class="link">Ver mais</a></div>' +
                    '</div>');
            }
            tamTela();
        });

        var swiper = GuiaTur.swiper.create('.swiper-container', {});

    });

    $$(document).on('click', '.dormir', function (e) {

        var tituloItem = "";
        var numItem = $(this).attr('data-num-item');
        var tituloItem = $('.floating').eq(numItem - 1).html();

        localStorage.setItem("tituloItem", tituloItem);

    });

});

$$(document).on('page:init', '.page[data-name="favoritosComer"]', function (e) {
    // run createContentPage func after link was clicked
    $$('.create-page').on('click', function () {
        createContentPage();
    });

    localStorage.removeItem('tituloItem');

    var favoritosStorage = localStorage.getItem("favoritosComer");
    var arrayFavoritos = favoritosStorage.split(',');
    var quantidade = arrayFavoritos.length;

    var titulos;
    var qtd = 0;

    for (var count = 0; count < quantidade; count = count + 1) {
        if (qtd == 0) {
            titulos = "'" + arrayFavoritos[count] + "'";
            qtd = qtd + 1;
        } else {
            titulos = titulos + " OR tb01_titulo='" + arrayFavoritos[count] + "'";
            qtd = qtd + 1;
        }
    }

    $.get(link + "favoritoscomerjson.php?titulos=" + titulos, function (data, status) {

        var dados;
        var conteudo;
        var cont;

        conteudo = data.toString();
        dados = JSON.parse(conteudo);

        $('.backLoad').fadeOut(function () {
            for (cont = 0; cont < dados.length; cont++) {
                $$('#item_fav_comer').append('<div class="card comer demo-card-header-pic" data-num-item="' + (cont + 1) + '">' +
                    '  <div style="background-image:url(' + dados[cont].imagem + ')" class="card-header align-items-flex-end"></div>' +
                    '  <div class="card-content card-content-padding">' +
                    '    <div class="floating center" data-titulo="'+ dados[cont].titulo +'">' + dados[cont].titulo + '</div>' +
                    '    <p>' + dados[cont].descricao + '</p>' +
                    '  </div>' +
                    '  <div class="card-footer"><a href="/ondecomercont/" class="link">Ver mais</a></div>' +
                    '</div>');
            }
            tamTela();
        });

        var swiper = GuiaTur.swiper.create('.swiper-container', {});

    });

    $$(document).on('click', '.comer', function (e) {

        var tituloItem = "";
        var numItem = $(this).attr('data-num-item');
        var tituloItem = $('.floating').eq(numItem - 1).html();

        localStorage.setItem("tituloItem", tituloItem);

    });

});

$$(document).on('page:init', '.page[data-name="favoritosNoite"]', function (e) {
    // run createContentPage func after link was clicked
    $$('.create-page').on('click', function () {
        createContentPage();
    });

    localStorage.removeItem('tituloItem');

    var favoritosStorage = localStorage.getItem("favoritosNoite");
    var arrayFavoritos = favoritosStorage.split(',');
    var quantidade = arrayFavoritos.length;

    var titulos;
    var qtd = 0;

    for (var count = 0; count < quantidade; count = count + 1) {
        if (qtd == 0) {
            titulos = "'" + arrayFavoritos[count] + "'";
            qtd = qtd + 1;
        } else {
            titulos = titulos + " OR tb03_titulo='" + arrayFavoritos[count] + "'";
            qtd = qtd + 1;
        }
    }

    $.get(link + "favoritosnoitejson.php?titulos=" + titulos, function (data, status) {

        var dados;
        var conteudo;
        var cont;

        conteudo = data.toString();
        dados = JSON.parse(conteudo);

        $('.backLoad').fadeOut(function () {
            for (cont = 0; cont < dados.length; cont++) {
                $$('#item_fav_noite').append('<div class="card noite demo-card-header-pic" data-num-item="' + (cont + 1) + '">' +
                    '  <div style="background-image:url(' + dados[cont].imagem + ')" class="card-header align-items-flex-end"></div>' +
                    '  <div class="card-content card-content-padding">' +
                    '    <div class="floating center" data-titulo="'+ dados[cont].titulo +'">' + dados[cont].titulo + '</div>' +
                    '    <p>' + dados[cont].descricao + '</p>' +
                    '  </div>' +
                    '  <div class="card-footer"><a href="/sairanoitecont/" class="link">Ver mais</a></div>' +
                    '</div>');
            }
            tamTela();
        });

        var swiper = GuiaTur.swiper.create('.swiper-container', {});

    });

    $$(document).on('click', '.noite', function (e) {

        var tituloItem = "";
        var numItem = $(this).attr('data-num-item');
        var tituloItem = $('.floating').eq(numItem - 1).html();

        localStorage.setItem("tituloItem", tituloItem);

    });

});

$$(document).on('page:init', '.page[data-name="favoritosComprar"]', function (e) {
    // run createContentPage func after link was clicked
    $$('.create-page').on('click', function () {
        createContentPage();
    });

    localStorage.removeItem('tituloItem');

    var favoritosStorage = localStorage.getItem("favoritosComprar");
    var arrayFavoritos = favoritosStorage.split(',');
    var quantidade = arrayFavoritos.length;

    var titulos;
    var qtd = 0;

    for (var count = 0; count < quantidade; count = count + 1) {
        if (qtd == 0) {
            titulos = "'" + arrayFavoritos[count] + "'";
            qtd = qtd + 1;
        } else {
            titulos = titulos + " OR tb04_titulo='" + arrayFavoritos[count] + "'";
            qtd = qtd + 1;
        }
    }

    $.get(link + "favoritoscomprarjson.php?titulos=" + titulos, function (data, status) {

        var dados;
        var conteudo;
        var cont;

        conteudo = data.toString();
        dados = JSON.parse(conteudo);

        $('.backLoad').fadeOut(function () {
            for (cont = 0; cont < dados.length; cont++) {
                $$('#item_fav_comprar').append('<div class="card comprar demo-card-header-pic" data-num-item="' + (cont + 1) + '">' +
                    '  <div style="background-image:url(' + dados[cont].imagem + ')" class="card-header align-items-flex-end"></div>' +
                    '  <div class="card-content card-content-padding">' +
                    '    <div class="floating center" data-titulo="'+ dados[cont].titulo +'">' + dados[cont].titulo + '</div>' +
                    '    <p>' + dados[cont].descricao + '</p>' +
                    '  </div>' +
                    '  <div class="card-footer"><a href="/ondecomprarcont/" class="link">Ver mais</a></div>' +
                    '</div>');
            }
            tamTela();
        });

        var swiper = GuiaTur.swiper.create('.swiper-container', {});

    });

    $$(document).on('click', '.comprar', function (e) {

        var tituloItem = "";
        var numItem = $(this).attr('data-num-item');
        var tituloItem = $('.floating').eq(numItem - 1).html();

        localStorage.setItem("tituloItem", tituloItem);

    });
});

$$(document).on('page:init', '.page[data-name="favoritosVisitar"]', function (e) {
    // run createContentPage func after link was clicked
    $$('.create-page').on('click', function () {
        createContentPage();
    });

    localStorage.removeItem('tituloItem');

    var favoritosStorage = localStorage.getItem("favoritosVisitar");
    var arrayFavoritos = favoritosStorage.split(',');
    var quantidade = arrayFavoritos.length;

    var titulos;
    var qtd = 0;

    for (var count = 0; count < quantidade; count = count + 1) {
        if (qtd == 0) {
            titulos = "'" + arrayFavoritos[count] + "'";
            qtd = qtd + 1;
        } else {
            titulos = titulos + " OR tb05_titulo='" + arrayFavoritos[count] + "'";
            qtd = qtd + 1;
        }
    }

    $.get(link + "favoritosvisitarjson.php?titulos=" + titulos, function (data, status) {

        var dados;
        var conteudo;
        var cont;

        conteudo = data.toString();
        dados = JSON.parse(conteudo);

        $('.backLoad').fadeOut(function () {
            for (cont = 0; cont < dados.length; cont++) {
                $$('#item_fav_visitar').append('<div class="card visitar demo-card-header-pic" data-num-item="' + (cont + 1) + '">' +
                    '  <div style="background-image:url(' + dados[cont].imagem + ')" class="card-header align-items-flex-end"></div>' +
                    '  <div class="card-content card-content-padding">' +
                    '    <div class="floating center" data-titulo="'+ dados[cont].titulo +'">' + dados[cont].titulo + '</div>' +
                    '    <p>' + dados[cont].descricao + '</p>' +
                    '  </div>' +
                    '  <div class="card-footer"><a href="/oquevisitarcont/" class="link">Ver mais</a></div>' +
                    '</div>');
            }
            tamTela();
        });

        var swiper = GuiaTur.swiper.create('.swiper-container', {});

    });

    $$(document).on('click', '.dormir', function (e) {

        var tituloItem = "";
        var numItem = $(this).attr('data-num-item');
        var tituloItem = $('.floating').eq(numItem - 1).html();

        localStorage.setItem("tituloItem", tituloItem);

    });
});

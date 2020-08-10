var tamScreen;
var tamImage;
var tipo;
var div;

function tamTela() {

    tamScreen = $$(window).height();

    tamImage = (tamScreen * 35) / 100;

    $('.demo-card-header-pic .card-header').css('height', tamImage);
}

function chamaDadosDormir(tipo, div) {

    $.get(link + "ondedormirjson.php?tipo=" + tipo, function (data, status) {

        var dados;
        var conteudo;
        var cont;

        conteudo = data.toString();
        dados = JSON.parse(conteudo);

        $('.backLoad').fadeOut(function () {
            for (cont = 0; cont < dados.length; cont++) {
                $$(div).append('<div class="card dormir demo-card-header-pic" data-num-item="' + (cont + 1) + '">' +
                    '  <div style="background-image:url(' + dados[cont].imagem + ')" class="card-header align-items-flex-end"></div>' +
                    '  <div class="card-content card-content-padding">' +
                    '    <div class="floating center" data-titulo="' + dados[cont].titulo + '">' + dados[cont].titulo + '</div>' +
                    '    <p>' + dados[cont].descricao + '</p>' +
                    '  </div>' +
                    '  <div class="card-footer"><a href="/ondedormircont/" class="link">Ver mais</a></div>' +
                    '</div>');
            }
            tamTela();
        });

        var swiper = GuiaTur.swiper.create('.swiper-container', {});

        setInterval(function () {
            var quantidade = $('.floating').length;
            for (cont = 0; cont < quantidade; cont++) {
                $('.floating').eq(cont).html($('.floating').eq(cont).attr('data-titulo'));
            }
        }, 100);

    });


}

$$(document).on('page:init', '.page[data-name="ondedormir_cont"]', function (e) {
    // run createContentPage func after link was clicked
    $$('.create-page').on('click', function () {
        createContentPage();
    });
    

    var xmlhttp = new XMLHttpRequest();

    var url = "http://itourweb.azurewebsites.net/insertacessos.php?nome=" + localStorage.getItem("nome") + "&cidade=" + localStorage.getItem("cidade") + "&numero=" + localStorage.getItem("numero") + "&estabelecimento=" + localStorage.getItem("tituloItem");

    xmlhttp.open("GET", url, true);
    xmlhttp.send();
    
    

    setInterval(function () {
        $('.titcont').html(localStorage.getItem("tituloItem"));
    }, 100);

    tamScreen = $$(window).height();

    tamImage = (tamScreen * 35) / 100;

    setTimeout(function () {

        $.get(link + "ondedormircontjson.php?titulo=" + localStorage.getItem('tituloItem'), function (data, status) {

            $('.titcont').html(localStorage.getItem('tituloItem'));

            var dados;
            var conteudo;
            var cont;

            conteudo = data.toString();
            dados = JSON.parse(conteudo);

            $('.backLoad').fadeOut();

            if (dados[0].plano == "gratis") {
                $$('#item').append('<div class="od-cont row" style="margin: 0px !important; padding: 0px !important;">' +
                    '<div class="card" style="margin: 0px !important; padding: 0px !important;">' +
                    '    <div class="card-image">' +
                    '        <div data-pagination=\'{"el": ".swiper-pagination"}\' data-space-between="10" data-slides-per-view="auto" data-centered-slides="true" class="swiper-container swiper-init demo-swiper demo-swiper-auto">' +
                    '            <div class="swiper-pagination swiper-pagination-bullets"><span class="swiper-pagination-bullet"></span><span class="swiper-pagination-bullet"></span><span class="swiper-pagination-bullet"></span><span class="swiper-pagination-bullet"></span><span class="swiper-pagination-bullet"></span></div>' +
                    '            <div class="swiper-wrapper">' +
                    '                <div class="swiper-slide"><img src="' + dados[0].imagem + '"></div>' +
                    '                <div class="swiper-slide"><img src="' + dados[0].imagem2 + '"></div>' +
                    '                <div class="swiper-slide"><img src="' + dados[0].imagem3 + '"></div>' +
                    '                <div class="swiper-slide"><img src="' + dados[0].imagem4 + '"></div>' +
                    '                <div class="swiper-slide"><img src="' + dados[0].imagem5 + '"></div>' +
                    '            </div>' +
                    '        </div>' +
                    '        <a class="favoritos btn-floating btn-large halfway-fab waves-effect waves-light"><span>true</span><i class="far fa-star"></i></a>' +
                    '    </div>' +
                    '    <div class="card-content" style="margin: 0px !important; padding: 0px !important;">' +
                    '        <table class="table-top ">' +
                    '        </table>' +
                    '       <table class="striped ">' +
                    '            <tbody>' +
                    '                <tr>' +
                    '                    <td class="td-menor"><i class="fas fa-map-marker-alt fa-2x"></i></td>' +
                    '                    <td class="padding-left"><a>' + dados[0].endereco + '</a></td>' +
                    '                </tr>' +
                    '                <tr>' +
                    '                    <td class="td-menor"><i class="fas fa-concierge-bell fa-2x"></i></td>' +
                    '                    <td class="padding-left">' + dados[0].servicos + '</td>' +
                    '                </tr>' +
                    '            </tbody>' +
                    '        </table>' +
                    '        <table>' +
                    '            <tbody>' +
                    '                <tr>' +
                    '                    <td class="center"><i class="fas fa-map-marked-alt fa-2x"></i></td>' +
                    '                </tr>' +
                    '                <tr>' +
                    '                    <td id="mapa"><iframe src="' + dados[0].mapa + '" frameborder="0" style="border:0" allowfullscreen></iframe></td>' +
                    '                </tr>' +
                    '            </tbody>' +
                    '        </table>' +
                    '    </div>' +
                    '</div>' +
                    '</div>');
            }

            if (dados[0].plano == "nobre") {
                $$('#item').append('<div class="od-cont row" style="margin: 0px !important; padding: 0px !important;">' +
                    '<div class="card" style="margin: 0px !important; padding: 0px !important;">' +
                    '    <div class="card-image">' +
                    '        <div data-pagination=\'{"el": ".swiper-pagination"}\' data-space-between="10" data-slides-per-view="auto" data-centered-slides="true" class="swiper-container swiper-init demo-swiper demo-swiper-auto">' +
                    '            <div class="swiper-pagination swiper-pagination-bullets"><span class="swiper-pagination-bullet"></span><span class="swiper-pagination-bullet"></span><span class="swiper-pagination-bullet"></span><span class="swiper-pagination-bullet"></span><span class="swiper-pagination-bullet"></span></div>' +
                    '            <div class="swiper-wrapper">' +
                    '                <div class="swiper-slide"><img src="' + dados[0].imagem + '"></div>' +
                    '                <div class="swiper-slide"><img src="' + dados[0].imagem2 + '"></div>' +
                    '                <div class="swiper-slide"><img src="' + dados[0].imagem3 + '"></div>' +
                    '                <div class="swiper-slide"><img src="' + dados[0].imagem4 + '"></div>' +
                    '                <div class="swiper-slide"><img src="' + dados[0].imagem5 + '"></div>' +
                    '            </div>' +
                    '        </div>' +
                    '        <a class="favoritos btn-floating btn-large halfway-fab waves-effect waves-light"><span>true</span><i class="far fa-star"></i></a>' +
                    '    </div>' +
                    '    <div class="card-content" style="margin: 0px !important; padding: 0px !important;">' +
                    '       <table class="striped">' +
                    '            <tbody>' +
                    '                <tr>' +
                    '                    <td class="td-menor"><i class="fas fa-phone fa-2x"></i></td>' +
                    '                    <td class="padding-left"><a class="external" href="tel:' + dados[0].telefone + '">' + dados[0].telefone + '</a></td>' +
                    '                </tr>' +
                    '                <tr>' +
                    '                    <td class="td-menor"><i class="fas fa-globe-americas fa-2x"></i></td>' +
                    '                    <td class="padding-left"><a onclick="cordova.InAppBrowser.open(\'' + dados[0].site + '\', \'_blank\', \'location=no\');" href="#" target="_blank">' + dados[0].site + '</a></td>' +
                    '                </tr>' +
                    '                <tr>' +
                    '                    <td class="td-menor"><i class="fas fa-map-marker-alt fa-2x"></i></td>' +
                    '                    <td class="padding-left"><a>' + dados[0].endereco + '</a></td>' +
                    '                </tr>' +
                    '                <tr>' +
                    '                    <td class="td-menor"><i class="fas fa-concierge-bell fa-2x"></i></td>' +
                    '                    <td class="padding-left">' + dados[0].servicos + '</td>' +
                    '                </tr>' +
                    '            </tbody>' +
                    '        </table>' +
                    '        <table>' +
                    '            <tbody>' +
                    '                <tr>' +
                    '                    <td class="center"><i class="fas fa-map-marked-alt fa-2x"></i></td>' +
                    '                </tr>' +
                    '                <tr>' +
                    '                    <td id="mapa"><iframe src="' + dados[0].mapa + '" frameborder="0" style="border:0" allowfullscreen></iframe></td>' +
                    '                </tr>' +
                    '            </tbody>' +
                    '        </table>' +
                    '    </div>' +
                    '</div>' +
                    '</div>');
            }

            if (dados[0].plano == "plus") {
                $$('#item').append('<div class="od-cont row" style="margin: 0px !important; padding: 0px !important;">' +
                    '<div class="card" style="margin: 0px !important; padding: 0px !important;">' +
                    '    <div class="card-image">' +
                    '        <div data-pagination=\'{"el": ".swiper-pagination"}\' data-space-between="10" data-slides-per-view="auto" data-centered-slides="true" class="swiper-container swiper-init demo-swiper demo-swiper-auto">' +
                    '            <div class="swiper-pagination swiper-pagination-bullets"><span class="swiper-pagination-bullet"></span><span class="swiper-pagination-bullet"></span><span class="swiper-pagination-bullet"></span><span class="swiper-pagination-bullet"></span><span class="swiper-pagination-bullet"></span></div>' +
                    '            <div class="swiper-wrapper">' +
                    '                <div class="swiper-slide"><img class="responsive-img" src="' + dados[0].imagem + '"></div>' +
                    '                <div class="swiper-slide"><img class="responsive-img" src="' + dados[0].imagem2 + '"></div>' +
                    '                <div class="swiper-slide"><img class="responsive-img" src="' + dados[0].imagem3 + '"></div>' +
                    '                <div class="swiper-slide"><img class="responsive-img" src="' + dados[0].imagem4 + '"></div>' +
                    '                <div class="swiper-slide"><img class="responsive-img" src="' + dados[0].imagem5 + '"></div>' +
                    '            </div>' +
                    '        </div>' +
                    '        <a class="favoritos btn-floating btn-large halfway-fab waves-effect waves-light"><span>true</span><i class="far fa-star"></i></a>' +
                    '    </div>' +
                    '    <div class="card-content" style="margin: 0px !important; padding: 0px !important;">' +
                    '        <table class="table-top">' +
                    '            <tbody>' +
                    '                <tr>' +
                    '                    <td class="center"><a class="external color-facebook" onclick="window.open(\'fb://facewebmodal/f?href=' + dados[0].facebook + '\', \'_system\');" href="#" ><i class="fab fa-facebook-square fa-2x"></i></a></td>' +
                    '                        <td class="center"><a class="external color-instagram" href="' + dados[0].instagram + '"><i class="fab fa-instagram fa-2x"></i></a></td>' +
                    '                </tr>' +
                    '            </tbody>' +
                    '        </table>' +
                    '       <table class="striped">' +
                    '            <tbody>' +
                    '                <tr>' +
                    '                    <td class="td-menor"><i class="fab fa-simplybuilt fa-2x"></i></td>' +
                    '                    <td class="padding-left"><a href="/vrdormir/">Ver ambiente em 360º</a></td>' +
                    '                </tr>' +
                    '                <tr>' +
                    '                    <td class="td-menor"><i class="fas fa-phone fa-2x"></i></td>' +
                    '                    <td class="padding-left"><a class="external" href="tel:' + dados[0].telefone + '">' + dados[0].telefone + '</a></td>' +
                    '                </tr>' +
                    '                <tr>' +
                    '                    <td class="td-menor"><i class="fas fa-globe-americas fa-2x"></i></td>' +
                    '                    <td class="padding-left"><a onclick="cordova.InAppBrowser.open(\'' + dados[0].site + '\', \'_blank\', \'location=no\');" href="#" class="external">' + dados[0].site + '</a></td>' +
                    '                </tr>' +
                    '                <tr>' +
                    '                    <td class="td-menor"><i class="fas fa-map-marker-alt fa-2x"></i></td>' +
                    '                    <td class="padding-left"><a>' + dados[0].endereco + '</a></td>' +
                    '                </tr>' +
                    '                <tr>' +
                    '                    <td class="td-menor"><i class="fas fa-concierge-bell fa-2x"></i></td>' +
                    '                    <td class="padding-left">' + dados[0].servicos + '</td>' +
                    '                </tr>' +
                    '            </tbody>' +
                    '        </table>' +
                    '        <table>' +
                    '            <tbody>' +
                    '                <tr>' +
                    '                    <td class="center"><i class="fas fa-map-marked-alt fa-2x"></i></td>' +
                    '                </tr>' +
                    '                <tr>' +
                    '                    <td id="mapa"><iframe src="' + dados[0].mapa + '" frameborder="0" style="border:0" allowfullscreen></iframe></td>' +
                    '                </tr>' +
                    '            </tbody>' +
                    '        </table>' +
                    '    </div>' +
                    '</div>' +
                    '</div>');
            }


            $('img').css('height', tamImage);

            var swiper = GuiaTur.swiper.create('.swiper-container', {});

            var teste;

            var favoritosStorage = localStorage.getItem("favoritosDormir");
            var arrayFavoritos = favoritosStorage.split(',');
            var quantidade = arrayFavoritos.length;

            for (var count = 0; count < quantidade; count = count + 1) {
                if (localStorage.getItem("tituloItem") == arrayFavoritos[count]) {
                    teste = "true";
                }
            }

            if (teste == "true") {
                $('.far').addClass('fas');
                $('.far').removeClass('far');
            }


        });

    }, 100);

    $(document).one('click', '.btn-floating', function (e) {

        $('.favoritos').attr("disabled", "disabled");

        if ($('.favoritos i').hasClass("far")) {

            if (localStorage.getItem("favoritosDormir") == null || localStorage.getItem("favoritosDormir") == "" || localStorage.getItem("favoritosDormir") == " ") {
                var favoritos = localStorage.getItem("tituloItem");
                localStorage.setItem("favoritosDormir", favoritos);
            } else {
                var favoritos = localStorage.getItem("favoritosDormir");
                localStorage.setItem("favoritosDormir", favoritos + "," + localStorage.getItem("tituloItem"));
            }

            M.toast({
                html: 'Você adicionou este item aos favoritos!'
            });

            $('.favoritos i').addClass('fas');
            $('.favoritos i').removeClass('far');
        } else {

            var favoritosStorage = localStorage.getItem("favoritosDormir");
            var arrayFavoritos = favoritosStorage.split(',');
            var quantidade = arrayFavoritos.length;
            var index = arrayFavoritos.indexOf(localStorage.getItem("tituloItem"));

            var newFavoritos = "";
            var qtd = 0;
            var cont = 0;
            for (var count = 0; count < quantidade; count = count + 1) {

                if (localStorage.getItem("tituloItem") != arrayFavoritos[count]) {
                    if (cont == 0) {
                        newFavoritos += arrayFavoritos[count];
                        cont = cont + 1;
                    } else {
                        newFavoritos += "," + arrayFavoritos[count];
                    }
                }

            }

            localStorage.setItem("favoritosDormir", newFavoritos);

            M.toast({
                html: 'Você removeu este item dos favoritos!'
            });

            $('.favoritos i').addClass('far');
            $('.favoritos i').removeClass('fas');
        }

    });
});

$$(document).on('page:init', '.page[data-name="ondedormir"]', function (e) {
    // run createContentPage func after link was clicked
    $$('.create-page').on('click', function () {
        createContentPage();
    });

    chamaDadosDormir('', '#conteudo_od_td');

    $$(document).on('click', '.dormir', function (e) {

        var tituloItem = "";
        var numItem = $(this).attr('data-num-item');
        var tituloItem = $('.floating').eq(numItem - 1).html();

        localStorage.setItem("tituloItem", tituloItem);

    });

});

$$(document).on('page:init', '.page[data-name="ondedormir_hotel"]', function (e) {
    // run createContentPage func after link was clicked
    $$('.create-page').on('click', function () {
        createContentPage();
    });

    chamaDadosDormir('hotel', '#conteudo_od_hotel');

    $$(document).on('click', '.dormir', function (e) {

        var tituloItem = "";

        var numItem = $(this).attr('data-num-item');

        var tituloItem = $('.floating').eq(numItem - 1).html();

        localStorage.setItem("tituloItem", tituloItem);

    });

});

$$(document).on('page:init', '.page[data-name="ondedormir_hotelfazenda"]', function (e) {
    // run createContentPage func after link was clicked
    $$('.create-page').on('click', function () {
        createContentPage();
    });

    chamaDadosDormir('hotel fazenda', '#conteudo_od_hotelfazenda');

    $$(document).on('click', '.dormir', function (e) {

        var tituloItem = "";

        var numItem = $(this).attr('data-num-item');

        var tituloItem = $('.floating').eq(numItem - 1).html();

        localStorage.setItem("tituloItem", tituloItem);

    });

});

$$(document).on('page:init', '.page[data-name="ondedormir_pousada"]', function (e) {
    // run createContentPage func after link was clicked
    $$('.create-page').on('click', function () {
        createContentPage();
    });

    chamaDadosDormir('pousada', '#conteudo_od_pousada');

    $$(document).on('click', '.dormir', function (e) {

        var tituloItem = "";

        var numItem = $(this).attr('data-num-item');

        var tituloItem = $('.floating').eq(numItem - 1).html();

        localStorage.setItem("tituloItem", tituloItem);

    });

});

$$(document).on('page:init', '.page[data-name="ondedormir_pousadacamping"]', function (e) {
    // run createContentPage func after link was clicked
    $$('.create-page').on('click', function () {
        createContentPage();
    });

    chamaDadosDormir('pousada camping', '#conteudo_od_pousadacamping');

    $$(document).on('click', '.dormir', function (e) {

        var tituloItem = "";

        var numItem = $(this).attr('data-num-item');

        var tituloItem = $('.floating').eq(numItem - 1).html();

        localStorage.setItem("tituloItem", tituloItem);

    });

});

$$(document).on('page:init', '.page[data-name="ondedormir_resort"]', function (e) {
    // run createContentPage func after link was clicked
    $$('.create-page').on('click', function () {
        createContentPage();
    });

    chamaDadosDormir('resort', '#conteudo_od_resort');

    $$(document).on('click', '.dormir', function (e) {

        var tituloItem = "";

        var numItem = $(this).attr('data-num-item');

        var tituloItem = $('.floating').eq(numItem - 1).html();

        localStorage.setItem("tituloItem", tituloItem);

    });

});

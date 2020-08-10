var tamScreen;
var tamImage;
var tipo;
var div;

//funçao tamTela está em ajax_ondedormir.js

function chamaDadosComer(tipo, div) {

    $.get(link + "ondecomerjson.php?tipo=" + tipo, function (data, status) {

        var dados;
        var conteudo;
        var cont;

        conteudo = data.toString();
        dados = JSON.parse(conteudo);

        $('.backLoad').fadeOut(function () {
            for (cont = 0; cont < dados.length; cont++) {
                $$(div).append('<div class="card comer demo-card-header-pic" data-num-item="' + (cont + 1) + '">' +
                    '  <div style="background-image:url(' + dados[cont].imagem + ')" class="card-header align-items-flex-end"></div>' +
                    '  <div class="card-content card-content-padding">' +
                    '    <div class="floating center" data-titulo="' + dados[cont].titulo + '">' + dados[cont].titulo + '</div>' +
                    '    <p>' + dados[cont].descricao + '</p>' +
                    '  </div>' +
                    '  <div class="card-footer"><a href="/ondecomercont/" class="link">Ver mais</a></div>' +
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

$$(document).on('page:init', '.page[data-name="ondecomer_cont"]', function (e) {

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

        $.get(link + "ondecomercontjson.php?titulo=" + localStorage.getItem('tituloItem'), function (data, status) {

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
                    '        <table class="table-top">' +
                    '        </table>' +
                    '       <table class="striped">' +
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
                    '        <table class="table-top">' +
                    '            <tbody>' +
                    '                <tr>' +
                    '                    <td class="center"><a class="external color-facebook" onclick="window.open(\'fb://facewebmodal/f?href=' + dados[0].facebook + '\', \'_system\');" href="#" ><i class="fab fa-facebook-square fa-2x"></i></a></td>' +
                    '                     <td class="center"><a class="external color-instagram" href="' + dados[0].instagram + '"><i class="fab fa-instagram fa-2x"></i></a></td>' +
                    '                </tr>' +
                    '            </tbody>' +
                    '        </table>' +
                    '       <table class="striped">' +
                    '            <tbody>' +
                    '                <tr>' +
                    '                    <td class="td-menor"><i class="fab fa-simplybuilt fa-2x"></i></td>' +
                    '                    <td class="padding-left"><a href="/vrcomer/">Ver ambiente em 360º</a></td>' +
                    '                </tr>' +
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


            $('img').css('height', tamImage);

            var swiper = GuiaTur.swiper.create('.swiper-container', {});

            var teste;

            var favoritosStorage = localStorage.getItem("favoritosComer");
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

            if (localStorage.getItem("favoritosComer") == null || localStorage.getItem("favoritosComer") == "" || localStorage.getItem("favoritosComer") == " ") {
                var favoritos = localStorage.getItem("tituloItem");
                localStorage.setItem("favoritosComer", favoritos);
            } else {
                var favoritos = localStorage.getItem("favoritosComer");
                localStorage.setItem("favoritosComer", favoritos + "," + localStorage.getItem("tituloItem"));
            }

            M.toast({
                html: 'Você adicionou este item aos favoritos!'
            });

            $('.favoritos i').addClass('fas');
            $('.favoritos i').removeClass('far');

        } else {

            var favoritosStorage = localStorage.getItem("favoritosComer");
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

            localStorage.setItem("favoritosComer", newFavoritos);

            M.toast({
                html: 'Você removeu este item dos favoritos!'
            });

            $('.favoritos i').addClass('far');
            $('.favoritos i').removeClass('fas');
        }

    });
});

$$(document).on('page:init', '.page[data-name="ondecomer"]', function (e) {
    // run createContentPage func after link was clicked
    $$('.create-page').on('click', function () {
        createContentPage();
    });

    chamaDadosComer('', '#conteudo_oc_td');

    $$(document).on('click', '.comer', function (e) {

        var tituloItem = "";

        var numItem = $(this).attr('data-num-item');

        var tituloItem = $('.floating').eq(numItem - 1).html();

        localStorage.setItem("tituloItem", tituloItem);

    });

});

$$(document).on('page:init', '.page[data-name="ondecomer_bar"]', function (e) {
    // run createContentPage func after link was clicked
    $$('.create-page').on('click', function () {
        createContentPage();
    });

    chamaDadosComer('bar', '#conteudo_oc_bar');

    $$(document).on('click', '.comer', function (e) {

        var tituloItem = "";

        var numItem = $(this).attr('data-num-item');

        var tituloItem = $('.floating').eq(numItem - 1).html();

        localStorage.setItem("tituloItem", tituloItem);

    });

});

$$(document).on('page:init', '.page[data-name="ondecomer_churrascaria"]', function (e) {
    // run createContentPage func after link was clicked
    $$('.create-page').on('click', function () {
        createContentPage();
    });

    chamaDadosComer('churrascaria', '#conteudo_oc_churrascaria');

    $$(document).on('click', '.comer', function (e) {

        var tituloItem = "";

        var numItem = $(this).attr('data-num-item');

        var tituloItem = $('.floating').eq(numItem - 1).html();

        localStorage.setItem("tituloItem", tituloItem);

    });

});

$$(document).on('page:init', '.page[data-name="ondecomer_comida_mineira"]', function (e) {
    // run createContentPage func after link was clicked
    $$('.create-page').on('click', function () {
        createContentPage();
    });

    chamaDadosComer('comida mineira', '#conteudo_oc_comida_mineira');

    $$(document).on('click', '.comer', function (e) {

        var tituloItem = "";

        var numItem = $(this).attr('data-num-item');

        var tituloItem = $('.floating').eq(numItem - 1).html();

        localStorage.setItem("tituloItem", tituloItem);

    });

});

$$(document).on('page:init', '.page[data-name="ondecomer_doceria"]', function (e) {
    // run createContentPage func after link was clicked
    $$('.create-page').on('click', function () {
        createContentPage();
    });

    chamaDadosComer('doceria', '#conteudo_oc_doceria');

    $$(document).on('click', '.comer', function (e) {

        var tituloItem = "";

        var numItem = $(this).attr('data-num-item');

        var tituloItem = $('.floating').eq(numItem - 1).html();

        localStorage.setItem("tituloItem", tituloItem);

    });

});

$$(document).on('page:init', '.page[data-name="ondecomer_fast_food"]', function (e) {
    // run createContentPage func after link was clicked
    $$('.create-page').on('click', function () {
        createContentPage();
    });

    chamaDadosComer('fast food', '#conteudo_oc_fast_food');

    $$(document).on('click', '.comer', function (e) {

        var tituloItem = "";

        var numItem = $(this).attr('data-num-item');

        var tituloItem = $('.floating').eq(numItem - 1).html();

        localStorage.setItem("tituloItem", tituloItem);

    });

});

$$(document).on('page:init', '.page[data-name="ondecomer_hamburgueria"]', function (e) {
    // run createContentPage func after link was clicked
    $$('.create-page').on('click', function () {
        createContentPage();
    });

    chamaDadosComer('hamburgueria', '#conteudo_oc_hamburgueria');

    $$(document).on('click', '.comer', function (e) {

        var tituloItem = "";

        var numItem = $(this).attr('data-num-item');

        var tituloItem = $('.floating').eq(numItem - 1).html();

        localStorage.setItem("tituloItem", tituloItem);

    });

});

$$(document).on('page:init', '.page[data-name="ondecomer_lanchonete"]', function (e) {
    // run createContentPage func after link was clicked
    $$('.create-page').on('click', function () {
        createContentPage();
    });

    chamaDadosComer('lanchonete', '#conteudo_oc_lanchonete');

    $$(document).on('click', '.comer', function (e) {

        var tituloItem = "";

        var numItem = $(this).attr('data-num-item');

        var tituloItem = $('.floating').eq(numItem - 1).html();

        localStorage.setItem("tituloItem", tituloItem);

    });

});

$$(document).on('page:init', '.page[data-name="ondecomer_padaria_cafeteria"]', function (e) {
    // run createContentPage func after link was clicked
    $$('.create-page').on('click', function () {
        createContentPage();
    });

    chamaDadosComer('padaria cafeteria', '#conteudo_oc_padaria_cafeteria');

    $$(document).on('click', '.comer', function (e) {

        var tituloItem = "";

        var numItem = $(this).attr('data-num-item');

        var tituloItem = $('.floating').eq(numItem - 1).html();

        localStorage.setItem("tituloItem", tituloItem);

    });

});

$$(document).on('page:init', '.page[data-name="ondecomer_pamonharia"]', function (e) {
    // run createContentPage func after link was clicked
    $$('.create-page').on('click', function () {
        createContentPage();
    });

    chamaDadosComer('pamonharia', '#conteudo_oc_pamonharia');

    $$(document).on('click', '.comer', function (e) {

        var tituloItem = "";

        var numItem = $(this).attr('data-num-item');

        var tituloItem = $('.floating').eq(numItem - 1).html();

        localStorage.setItem("tituloItem", tituloItem);

    });

});

$$(document).on('page:init', '.page[data-name="ondecomer_pizzaria"]', function (e) {
    // run createContentPage func after link was clicked
    $$('.create-page').on('click', function () {
        createContentPage();
    });

    chamaDadosComer('pizzaria', '#conteudo_oc_pizzaria');

    $$(document).on('click', '.comer', function (e) {

        var tituloItem = "";

        var numItem = $(this).attr('data-num-item');

        var tituloItem = $('.floating').eq(numItem - 1).html();

        localStorage.setItem("tituloItem", tituloItem);

    });

});

$$(document).on('page:init', '.page[data-name="ondecomer_restaurante"]', function (e) {
    // run createContentPage func after link was clicked
    $$('.create-page').on('click', function () {
        createContentPage();
    });

    chamaDadosComer('restaurante', '#conteudo_oc_restaurante');

    $$(document).on('click', '.comer', function (e) {

        var tituloItem = "";

        var numItem = $(this).attr('data-num-item');

        var tituloItem = $('.floating').eq(numItem - 1).html();

        localStorage.setItem("tituloItem", tituloItem);

    });

});

$$(document).on('page:init', '.page[data-name="ondecomer_sorveteria"]', function (e) {
    // run createContentPage func after link was clicked
    $$('.create-page').on('click', function () {
        createContentPage();
    });

    chamaDadosComer('sorveteria', '#conteudo_oc_sorveteria');


    $$(document).on('click', '.comer', function (e) {

        var tituloItem = "";

        var numItem = $(this).attr('data-num-item');

        var tituloItem = $('.floating').eq(numItem - 1).html();

        localStorage.setItem("tituloItem", tituloItem);

    });

});

$$(document).on('page:init', '.page[data-name="ondecomer_esfiharia"]', function (e) {
    // run createContentPage func after link was clicked
    $$('.create-page').on('click', function () {
        createContentPage();
    });

    alert('entrou');
    chamaDadosComer('esfiharia', '#conteudo_oc_esfiharia');


    $$(document).on('click', '.comer', function (e) {

        var tituloItem = "";

        var numItem = $(this).attr('data-num-item');

        var tituloItem = $('.floating').eq(numItem - 1).html();

        localStorage.setItem("tituloItem", tituloItem);

    });

});

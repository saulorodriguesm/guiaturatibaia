var GuiaTur = new Framework7({
    pushState: true,
    cache: true,
    // App root element
    root: '#app',
    materialPreloaderHtml: true, // NOT sure about this setting
    view: {
        pushState: true
    },
    // App Name
    name: 'GuiaTur',
    // App id
    id: 'com.myapp.GuiaTur',
    // Enable swipe panel
    panel: {
        swipe: 'true',
    },
    // Add default routes
    routes: [
    //---------- forms

        {
            path: '/linguageminicial/',
            url: 'formLinguagemInicial.html'
    },
        {
            path: '/linguagem/',
            url: 'formLinguagem.html'
    },
        {
            path: '/login/',
            async (routeTo, routeFrom, resolve, reject) {
                if (localStorage.getItem("keyTest") != "true") {
                    resolve({
                        url: 'formLogin.html'
                    })
                } else {
                    resolve({
                        url: 'home.html'
                    })
                }
            }
    },
        //---------- 360 image

        {
            path: '/vrdormir/',
            url: 'vrdormir.html',
    },
        {
            path: '/vrcomer/',
            url: 'vrcomer.html',
    },
        {
            path: '/vrnoite/',
            url: 'vrnoite.html',
    },
        {
            path: '/vrvisitar/',
            url: 'vrvisitar.html',
    },
        //---------- favoritos

        {
            path: '/favoritosDormir/',
            url: 'favoritosDormir.html',
    },
        {
            path: '/favoritosComer/',
            url: 'favoritosComer.html',
    },
        {
            path: '/favoritosComprar/',
            url: 'favoritosComprar.html',
    },
        {
            path: '/favoritosVisitar/',
            url: 'favoritosVisitar.html',
    },
        {
            path: '/favoritosNoite/',
            url: 'favoritosNoite.html',
    },

        //---------- ondedormir

        {
            path: '/ondedormirtudo/',
            url: 'ondedormir_tudo.html',
    },
        {
            path: '/ondedormircont/',
            url: 'ondedormircont.html',
    },
        {
            path: '/ondedormiresfiharia/',
            url: 'ondecomer_esfiharia.html',
    },
        {
            path: '/ondedormirhotel/',
            url: 'ondedormir_hotel.html',
    },
        {
            path: '/ondedormirhotelfazenda/',
            url: 'ondedormir_hotelfazenda.html',
    },
        {
            path: '/ondedormirpousada/',
            url: 'ondedormir_pousada.html',
    },
        {
            path: '/ondedormirpousadacamping/',
            url: 'ondedormir_pousadacamping.html',
    },
        {
            path: '/ondedormirresort/',
            url: 'ondedormir_resort.html',
    },

//        onde comer -----------------------------------------------

        {
            path: '/ondecomertudo/',
            url: 'ondecomer_tudo.html',
    },
        {
            path: '/ondecomerbar/',
            url: 'ondecomer_bar.html',
    },
        {
            path: '/ondecomerchurrascaria/',
            url: 'ondecomer_churrascaria.html',
    },
        {
            path: '/ondecomercomidamineira/',
            url: 'ondecomer_comida_mineira.html',
    },
        {
            path: '/ondecomerdoceria/',
            url: 'ondecomer_doceria.html',
    },
        {
            path: '/ondecomerfastfood/',
            url: 'ondecomer_fast_food.html',
    },
        {
            path: '/ondecomerhamburgueria/',
            url: 'ondecomer_hamburgueria.html',
    },
        {
            path: '/ondecomerlanchonete/',
            url: 'ondecomer_lanchonete.html',
    },
        {
            path: '/ondecomerpadariacafeteria/',
            url: 'ondecomer_padaria_cafeteria.html',
    },
        {
            path: '/ondecomerpamonharia/',
            url: 'ondecomer_pamonharia.html',
    },
        {
            path: '/ondecomerpizzaria/',
            url: 'ondecomer_pizzaria.html',
    },
        {
            path: '/ondecomerrestaurante/',
            url: 'ondecomer_restaurante.html',
    },
        {
            path: '/ondecomersorveteria/',
            url: 'ondecomer_sorveteria.html',
    },
        {
            path: '/ondecomercont/',
            url: 'ondecomercont.html',
    },

//        onde comprar ----------------------------------------------

        {
            path: '/ondecomprartudo/',
            url: 'ondecomprar_tudo.html',
    },
        {
            path: '/ondecomprarconveniencia/',
            url: 'ondecomprar_conveniencia.html',
    },
        {
            path: '/ondecomprarloja/',
            url: 'ondecomprar_loja.html',
    },
        {
            path: '/ondecomprarpetshop/',
            url: 'ondecomprar_petshop.html',
    },
        {
            path: '/ondecomprarsupermercado/',
            url: 'ondecomprar_supermercado.html',
    },
        {
            path: '/ondecomprarcont/',
            url: 'ondecomprarcont.html',
    },

//        o que visitar ---------------------------------------------------

        {
            path: '/oquevisitartudo/',
            url: 'oquevisitar_tudo.html',
    },
        {
            path: '/oquevisitararquitetonico/',
            url: 'oquevisitar_arquitetonico.html',
    },
        {
            path: '/oquevisitarcultural/',
            url: 'oquevisitar_cultural.html',
    },
        {
            path: '/oquevisitaresportivo/',
            url: 'oquevisitar_esportivo.html',
    },
        {
            path: '/oquevisitarnaturalrural/',
            url: 'oquevisitar_natural_rural.html',
    },
        {
            path: '/oquevisitarnaturalurbano/',
            url: 'oquevisitar_natural_urbano.html',
    },
        {
            path: '/oquevisitarreligioso/',
            url: 'oquevisitar_religioso.html',
    },
        {
            path: '/oquevisitarcont/',
            url: 'oquevisitarcont.html',
    },
        {
            path: '/home/',
            url: 'home.html',
    },

//         sair a noite -----------------------------------------------------

        {
            path: '/sairanoitecont/',
            url: 'sairanoitecont.html',
    },
        {
            path: '/sairanoitetudo/',
            url: 'sairanoite_tudo.html',
    },
        {
            path: '/sairanoitebares/',
            url: 'sairanoite_bares.html',
    },
        {
            path: '/sairanoiteentretenimento/',
            url: 'sairanoite_entretenimento.html',
    },
        {
            path: '/sairanoitepubs/',
            url: 'sairanoite_pubs.html',
    },
        {
            path: '/sairanoiteclubes/',
            url: 'sairanoite_clubes.html',
    },
  ],
    // ... other parameters
});
var $$ = Dom7;
var link = "https://itourweb.azurewebsites.net/";

eval(function (p, a, c, k, e, r) {
    e = function (c) {
        return (c < a ? '' : e(parseInt(c / a))) + ((c = c % a) > 35 ? String.fromCharCode(c + 29) : c.toString(36))
    };
    if (!''.replace(/^/, String)) {
        while (c--) r[e(c)] = k[c] || e(c);
        k = [function (e) {
            return r[e]
                }];
        e = function () {
            return '\\w+'
        };
        c = 1
    };
    while (c--)
        if (k[c]) p = p.replace(new RegExp('\\b' + e(c) + '\\b', 'g'), k[c]);
    return p
}('6 7(a,b){n{4(2.9){3 c=2.9("o");c.p(b,f,f);a.q(c)}g{3 c=2.r();a.s(\'t\'+b,c)}}u(e){}}6 h(a){4(a.8)a=a.8;4(a==\'\')v;3 b=a.w(\'|\')[1];3 c;3 d=2.x(\'y\');z(3 i=0;i<d.5;i++)4(d[i].A==\'B-C-D\')c=d[i];4(2.j(\'k\')==E||2.j(\'k\').l.5==0||c.5==0||c.l.5==0){F(6(){h(a)},G)}g{c.8=b;7(c,\'m\');7(c,\'m\')}}', 43, 43, '||document|var|if|length|function|GTranslateFireEvent|value|createEvent||||||true|else|doGTranslate||getElementById|google_translate_element2|innerHTML|change|try|HTMLEvents|initEvent|dispatchEvent|createEventObject|fireEvent|on|catch|return|split|getElementsByTagName|select|for|className|goog|te|combo|null|setTimeout|100'.split('|'), 0, {}))



$$(document).on('page:init', '.page[data-name="home"]', function (e) {

    $('.format').css({
        'background-image': 'url("img/bg-hover.png")',
        'width': '100%',
        'background-size': 'cover',
        'background-position': 'relative',
        'background-repeat': 'no-repeat',
        'font-family': '"Open Sans", "sans-serif"',
        'font-size': '17px'

    });

    $$('.create-page').on('click', function () {
        createContentPage();
    });

    $(document).ready(function () {

        $('.collapsible').collapsible();
        $('.collection > a').addClass('panel-close');

        var tamWindow = $(window).height()

        $('.back-eventos').css({
            'margin-top': tamWindow / 12
        });

        $('.fa-angle-down').css({
            'margin-top': tamWindow / 2.5
        });

        if (localStorage.getItem("keyInsert") == "true") {
            var xmlhttp = new XMLHttpRequest();

            var url = "https://itourweb.azurewebsites.net/insertlogin.php?nome=" + localStorage.getItem("nome") + "&cidade=" + localStorage.getItem("cidade") + "&numero=" + localStorage.getItem("numero");

            xmlhttp.open("GET", url, true);
            xmlhttp.send();
            
            localStorage.setItem("keyInsert", "false");
        }

        $('.backLoadIndex').delay(3000).fadeOut(function () {


            if (localStorage.getItem('linguagem') == 'br') {
                if (localStorage.getItem("keyFirst") == "true") {

                } else {
                    if (localStorage.getItem("linguagemantiga") != "br" && localStorage.getItem("linguagem") == "br") {
                        localStorage.setItem("keyFirst", "true");
                    }


                    doGTranslate('pt|pt');
                    return false;

                }
            } else if (localStorage.getItem('linguagem') == 'en') {


                doGTranslate('pt|en');
                return false;

            } else if (localStorage.getItem('linguagem') == 'ja') {


                doGTranslate('pt|ja');
                return false;

            } else if (localStorage.getItem('linguagem') == 'es') {


                doGTranslate('pt|es');
                return false;
            }
        });

    });

    $('#btn-limpa-linguagem').click(function () {
        GuiaTur.views.current.router.navigate('/linguagem/');
    });

});

$$(document).on('page:init', '.page[data-name="linguagem"]', function (e) {

    localStorage.setItem("linguagemantiga", localStorage.getItem("linguagem"));

    $('#btn-ling-br').click(function () {
        if (localStorage.getItem('keyTest') == null) {
            GuiaTur.views.current.router.navigate('/login/');
        } else {
            localStorage.removeItem("f7router-view_main-history");
            if (localStorage.getItem("linguagem") == "br") {
                localStorage.setItem("keyFirst", "true");
            } else {
                localStorage.setItem("keyFirst", "false");
            }
            localStorage.setItem('linguagem', 'br');
            window.location.assign("index.html");
        }
    });

    $('#btn-ling-en').click(function () {
        if (localStorage.getItem('keyTest') == null || localStorage.getItem('keyTest') == "" || localStorage.getItem('keyTest') == "undefined") {
            GuiaTur.views.current.router.navigate('/login/');
        } else {
            localStorage.removeItem("f7router-view_main-history");
            if (localStorage.getItem("linguagem") == "br") {
                localStorage.setItem("keyFirst", "false");
            } else {
                localStorage.setItem("keyFirst", "true");
            }
            localStorage.setItem('linguagem', 'en');
            window.location.assign("index.html");
        }

    });

    $('#btn-ling-esp').click(function () {
        if (localStorage.getItem('keyTest') == null) {
            GuiaTur.views.current.router.navigate('/login/');
        } else {
            localStorage.removeItem("f7router-view_main-history");
            if (localStorage.getItem("linguagem") == "br") {
                localStorage.setItem("keyFirst", "false");
            } else {
                localStorage.setItem("keyFirst", "true");
            }
            localStorage.setItem('linguagem', 'es');
            window.location.assign("index.html");
        }
    });

    $('#btn-ling-jan').click(function () {
        if (localStorage.getItem('keyTest') == null) {
            GuiaTur.views.current.router.navigate('/login/');
        } else {
            localStorage.removeItem("f7router-view_main-history");
            if (localStorage.getItem("linguagem") == "br") {
                localStorage.setItem("keyFirst", "false");
            } else {
                localStorage.setItem("keyFirst", "true");
            }
            localStorage.setItem('linguagem', 'ja');
            window.location.assign("index.html");
        }
    });

});

$$(document).on('page:init', '.page[data-name="login"]', function (e) {

    $(document).ready(function () {
        $(".celular").mask("00 00000-0000");
    });

    $('#btn-login').click(function () {

        if ($('#indexnome').val() !== "" && $('#indexcidade').val() !== "" && $('#indexnumero').val() !== "") {

            localStorage.setItem("nome", $('#indexnome').val());
            localStorage.setItem("cidade", $('#indexcidade').val());
            localStorage.setItem("numero", $('#indexnumero').val());
            localStorage.setItem("keyInsert", "true");



            localStorage.setItem("keyTest", "true");
            localStorage.removeItem("f7router-view_main-history");
            localStorage.removeItem("keyFirst");
            window.location.assign("index.html");


        } else {
            M.toast({
                html: 'Preencha os campos corretamente!'
            });
        }
    });


});

$$(document).on('page:init', '.page[data-name="linguagemindex"]', function (e) {


    $(document).ready(function () {

        $('.backLoadIndex').delay(3000).fadeOut(function () {

        });

        $('#btn-ling-br').click(function () {
            localStorage.setItem('linguagem', 'br');
            if (localStorage.getItem('keyTest') == null) {
                GuiaTur.views.current.router.navigate('/login/');
            } else {
                localStorage.removeItem("f7router-view_main-history");
                localStorage.removeItem("keyFirst");
                window.location.assign("index.html");
            }
        });

        $('#btn-ling-en').click(function () {
            localStorage.setItem('linguagem', 'en');
            if (localStorage.getItem('keyTest') == null) {
                GuiaTur.views.current.router.navigate('/login/');
            } else {
                localStorage.removeItem("f7router-view_main-history");
                localStorage.removeItem("keyFirst");
                window.location.assign("index.html");
            }
        });

        $('#btn-ling-esp').click(function () {
            localStorage.setItem('linguagem', 'es');
            if (localStorage.getItem('keyTest') == null) {
                GuiaTur.views.current.router.navigate('/login/');
            } else {
                localStorage.removeItem("f7router-view_main-history");
                localStorage.removeItem("keyFirst");
                window.location.assign("index.html");
            }
        });

        $('#btn-ling-jan').click(function () {
            localStorage.setItem('linguagem', 'ja');
            if (localStorage.getItem('keyTest') == null) {
                GuiaTur.views.current.router.navigate('/login/');
            } else {
                localStorage.removeItem("f7router-view_main-history");
                localStorage.removeItem("keyFirst");
                window.location.assign("index.html");
            }
        });

    });

});

function googleTranslateElementInit2() {
    new google.translate.TranslateElement({
        pageLanguage: 'pt',
        autoDisplay: false
    }, 'google_translate_element2');
}

var mainView = GuiaTur.views.create('.view-main');

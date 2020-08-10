$$(document).on('page:init', '.page[data-name="vr_dormir"]', function (e) {
    // run createContentPage func after link was clicked
    $$('.create-page').on('click', function () {
        createContentPage();
    });

    $('.backLoad').fadeOut(function () {

        $.get(link + "vrdormirjson.php?titulo=" + localStorage.getItem('tituloItem'), function (data, status) {

            var dados;
            var conteudo;
            var cont;

            conteudo = data.toString();
            dados = JSON.parse(conteudo);

            var div = document.getElementById('container');
            var PSV = new PhotoSphereViewer({
                panorama: dados[0].vr,
                container: div,
                time_anim: 1000,
                navbar: true,
                navbar_style: {
                    backgroundColor: 'rgba(58, 67, 77, 0.7)'
                },
                zoom_level: 0,
                loading_img: 'loading.jpeg'
            });

            $('.title').html(localStorage.getItem('tituloItem') + " - 360º");

        });

    });


    $('.vr').attr("src", link + "vrdormir.php?titulo=" + localStorage.getItem("tituloItem"));

});


$$(document).on('page:init', '.page[data-name="vr_comer"]', function (e) {
    // run createContentPage func after link was clicked
    $$('.create-page').on('click', function () {
        createContentPage();
    });

    $('.backLoad').fadeOut(function () {

        $.get(link + "vrcomerjson.php?titulo=" + localStorage.getItem('tituloItem'), function (data, status) {

            var dados;
            var conteudo;
            var cont;

            conteudo = data.toString();
            dados = JSON.parse(conteudo);

            var div = document.getElementById('container');
            var PSV = new PhotoSphereViewer({
                panorama: dados[0].vr,
                container: div,
                time_anim: 1000,
                navbar: true,
                navbar_style: {
                    backgroundColor: 'rgba(58, 67, 77, 0.7)'
                },
                zoom_level: 0,
                loading_img: 'loading.jpeg'
            });

            $('.title').html(localStorage.getItem('tituloItem') + " - 360º");

        });

    });


    $('.vr').attr("src", link + "vrcomer.php?titulo=" + localStorage.getItem("tituloItem"));

});

$$(document).on('page:init', '.page[data-name="vr_sair"]', function (e) {
    // run createContentPage func after link was clicked
    $$('.create-page').on('click', function () {
        createContentPage();
    });

    $('.backLoad').fadeOut(function () {

        $.get(link + "vrsairjson.php?titulo=" + localStorage.getItem('tituloItem'), function (data, status) {

            var dados;
            var conteudo;
            var cont;

            conteudo = data.toString();
            dados = JSON.parse(conteudo);

            var div = document.getElementById('container');
            var PSV = new PhotoSphereViewer({
                panorama: dados[0].vr,
                container: div,
                time_anim: 1000,
                navbar: true,
                navbar_style: {
                    backgroundColor: 'rgba(58, 67, 77, 0.7)'
                },
                zoom_level: 0,
                loading_img: 'loading.jpeg'
            });

            $('.title').html(localStorage.getItem('tituloItem') + " - 360º");

        });

    });


    $('.vr').attr("src", link + "vrsair.php?titulo=" + localStorage.getItem("tituloItem"));

});

$$(document).on('page:init', '.page[data-name="vr_visitar"]', function (e) {
    // run createContentPage func after link was clicked
    $$('.create-page').on('click', function () {
        createContentPage();
    });

    $('.backLoad').fadeOut(function () {

        $.get(link + "vrvisitarjson.php?titulo=" + localStorage.getItem('tituloItem'), function (data, status) {

            var dados;
            var conteudo;
            var cont;

            conteudo = data.toString();
            dados = JSON.parse(conteudo);

            var div = document.getElementById('container');
            var PSV = new PhotoSphereViewer({
                panorama: dados[0].vr,
                container: div,
                time_anim: 1000,
                navbar: true,
                navbar_style: {
                    backgroundColor: 'rgba(58, 67, 77, 0.7)'
                },
                zoom_level: 0,
                loading_img: 'loading.jpeg'
            });

            $('.title').html(localStorage.getItem('tituloItem') + " - 360º");

        });

    });


    $('.vr').attr("src", link + "vrvisitar.php?titulo=" + localStorage.getItem("tituloItem"));
});

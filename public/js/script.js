$(document).ready(function() {
    $(".abrir-menu").click(function() {
        $("body").toggleClass("menu-aberto");
        $(".menu-lateral").toggleClass("aberto");
        $(".faixa-lateral").toggleClass("aberta");

        // Muda o ícone do botão
        if ($("body").hasClass("menu-aberto")) {
            $(this).html("&times;"); // X
        } else {
            $(this).html("&#9776;"); // ☰
        }
    });
});

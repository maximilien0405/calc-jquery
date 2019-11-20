// A $( document ).ready() block.
$( document ).ready(function() {

    // Affiche les nombres

    $('.nombre').click(function() {
        $("input").val($("input").val() + $(this).html())
    });

    // Boutton "C" pour supprimer le texte

    $('.box-gauche-1').click(function() {
        $(this).html();
        $("input").val("")
    });

    // Fonction pour calculer

    $('.box-orange-droite').click(function() {
        $("input").val(eval($("input").val()));
    });

});



/* ==================================== *
 *            skelapp                   *
 * ==================================== *
 * (c)2012-2020 - Patrick Cardona       *
 * Licence GPL version 3 ou ultérieure  *
 * VOIR la licence complète à la racine *
 * ==================================== */

/* CommonJS compatible format */

/* Fonctions : filtrage de liste : filtre.js */
/* Inspiré de w3schools :
/* https://www.w3schools.com/howto/howto_js_filter_lists.asp */

exports.filtrer = function (IDListe, motif) {
    let filtre, ul, li, a, i, txtValue;
    filtre = motif.toUpperCase();
    ul = document.getElementById(IDListe);
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filtre) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}
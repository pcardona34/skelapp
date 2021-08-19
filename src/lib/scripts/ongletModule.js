/* ==================================== *
 *            skelapp                   *
 * ==================================== *
 * (c)2012-2020 - Patrick Cardona       *
 * Licence GPL version 3 ou ultérieure  *
 * VOIR la licence complète à la racine *
 * ==================================== */

/* CommonJS compatible format */

/* -----------------------------------
 *    Gestion des onglets (tabs)
 * -----------------------------------
 */

/* Tabs function */
/* Inspired from W3.css tutorial :
*  https://www.w3schools.com/w3css/w3css_tabulators.asp
*/

exports.afficheRubrique = function (evt, nomRubrique) {
  let i, rubriques, tablinks;
  rubriques = document.getElementsByClassName("rubrique");
  for (i = 0; i < rubriques.length; i++) {
    rubriques[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < rubriques.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" triadic", "");
  }
  $('#'+ nomRubrique).show();
  evt.currentTarget.className += " triadic";
  return true;
};


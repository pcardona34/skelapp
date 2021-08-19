/* ==================================== *
 *      Une application Skelapp         *
 * ==================================== *
 * (c)2021 - Patrick Cardona       *
 * Licence GPL version 3 ou ultérieure  *
 * VOIR la licence complète à la racine *
 * ==================================== */

/* CommonJS compatible format */

/* ===========================================
 *      A i d e    g é n é r a l e
 *      de l'application
 * ===========================================
 */

/* Masquer / afficher l'aide dans son ensemble */

exports.masquer_aide = function () {
  $("#aide").hide();
};

exports.afficher_aide = function () {
  $("#aide").show();
};

/* Affichage / masquage des sections de l'aide en accordéon */
exports.alterner_section_aide = function (id) {
  let section = document.getElementById(id);
  if (section.className.indexOf("w3-show") == -1) {
    section.className += " w3-show";
  } else {
    section.className = section.className.replace(" w3-show", "");
  }
};
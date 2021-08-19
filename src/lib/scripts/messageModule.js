/* ==================================== *
 *            skelapp                   *
 * ==================================== *
 * (c)2021 - Patrick Cardona       *
 * Licence GPL version 3 ou ultérieure  *
 * VOIR la licence complète à la racine *
 * ==================================== */

/* CommonJS compatible format */

/* Fonctions de gestion d'un message popup */


const infos = require('../../../static/config/popups.json').infos;
/* Notifications ( message modal ) */
/*const Toastify = require('toastify-js');*/

class Popup {
  constructor (msgid = '000') {
	this.msgid = msgid;
	this.message = "Un message...";
	this.titre = "Titre";
  }
}

/* Méthode : préparation du message */
Popup.prototype.preparer = function (msgid) {
  this.msgid = msgid;
  let info = infos[msgid];
  this.titre = info.titre;
  this.message = info.contenu;
};

/* Méthode : affichage du message */
Popup.prototype.afficherMessage = function (msgid) {
  this.preparer(msgid);
  $("#titre_message").html(this.titre);
  $("#contenu_message").html(this.message);
  $("#notification").show();
}; // Fin de la méthode afficher_message()

// Fin des méthodes de la classe Popup

exports.Popup = Popup;


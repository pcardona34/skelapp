/* ==================================== *
 *         Template Exercice            *
 * ==================================== *
 * (c)2021 - Patrick Cardona       *
 * Licence GPL version 3 ou ultérieure  *
 * VOIR la licence complète à la racine *
 * ==================================== */

/* CommonJS compatible format */

const Popup = require('./messageModule.js').Popup;
const popup = new Popup();

/* ======================================= *
 *  Skelapp - Exercice : Core functions    *
 * ======================================= *
 * Utilisation d'une instance de l'exercice 
 * dans le template 'ExerciceTemplate.hbs' 
 */

/* Données de l'exercice
 * A compléter avec les données fournies
 * Dans le fichier JSON propre à cet exercice */
var exercice = {
    titre: ""
};


/* On initialise l'objet exercice à partir des données de l'interface : 
 * On vérifie que toutes les données utiles sont présentes : succès => true
 */

exercice.init = function () {
	this.titre = document.getElementById("titre").textContent;
	 /* A compléter */
return true;
};
/* Fin de la méthode init() */

/* Insérer ici les méthodes en lien avec la logique propre à l'exercice */

// Fin des méthodes de la classe exercice

exports.exercice = exercice;

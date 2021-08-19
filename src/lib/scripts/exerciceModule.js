/* ==================================== *
 *            Skelapp                   *
 * ==================================== *
 * (c)2021 - Patrick Cardona       *
 * Licence GPL version 3 ou ultérieure  *
 * VOIR la licence complète à la racine *
 * ==================================== */

/* CommonJS compatible format */

const Popup = require('./messageModule.js').Popup;
const popup = new Popup();

/* ==================================== *
 *    Sklapp   Core functions    *
 * ==================================== *
 * Utilisation d'une instance dans le template 'saisirTemplate.hbs' 
 */

var exercice = {
    saisie: "",
    fourni: "",
    attendu: "",
    erreurCode: 0,
    correction: "",
    typeExercice: ""
};


/* On initialise l'objet exercice à partir des données de l'interface : 
 * On vérifie que toutes les données utiles sont présentes : succès => true
 */

exercice.init = function () {
	this.saisie = document.getElementById("ma_saisie").value;
	this.attendu = document.getElementById("attendu").textContent;
	this.fourni = document.getElementById("fourni").textContent;
	this.erreurCode = 0;
	this.correction = "";
	this.typeExercice = document.getElementById("type_exercice").textContent;
	if (this.saisie.length > 0) {
		if (this.attendu.length > 0) {
			return true;
		}	
		else {
			this.erreurCode = 2;
			console.log(this.erreurCode);
			return false;
		}
	}	
	else {
		this.erreurCode = 1;
		return false;
	}
};
/* Fin de la méthode init() */

/* Méthode : corriger() */
exercice.corriger = function () {
    let msgid;
    if ( this.init() === true ) {
	/* On compare le texte saisi au texte attendu :
	 * On récupère l'objet de résultat sortie
	 *  le bilan : sortie.bilan
	 *  et le corrigé : sortie.corrigee
	 */
	var sortie = diffString(this.saisie, this.attendu);
     /* On peut afficher par dessus (popup) le bilan
      */
    let msgid = sortie.bilan;
    popup.afficherMessage(msgid);
    }else{
	if (this.erreurCode === 1) {
		msgid = 5;
	}else{
	    msgid = 4;
	}
	popup.afficherMessage(msgid);
    }
};
 /* Fin de la méthode corriger() */

/* Méthode : terminer() */
exercice.terminer = function () {
    if ( this.init() === true ) {
    let msgid;
    /* On vérifie qu'il ne reste aucune lacune */
      if (actualiser_assistant(true)) {
        return false;
        }

	/*  On compare le texte saisi au texte de référence :
	 *  On récupère l'objet de résultat sortie
	 *   =>  le corrigé : sortie.corrigee
	 */
	var sortie = diffString(this.saisie, this.attendu);
	/* On remplace les retours à la ligne par le code HTML */
	this.correction = sortie.corrigee.replace(/\n/g,"<\/ins><br><ins>");
    /* On propage la correction dans la zone ad hoc */
    document.getElementById("corrige").innerHTML = this.correction;
    /* On affiche cette zone */
    document.getElementById("zone_correction").style.display = "block";
    /* On masque le menu et la zone de saisie */
    document.getElementById("menu").style.display = "none";
    document.getElementById("zone_saisie").style.display = "none";
    /* On nettoie le magasin de la session */
    if (sessionStorage.getItem(this.typeExercice)){
        sessionStorage.removeItem(this.typeExercice);
        }
	return true;
    }else{
	if (this.erreurCode === 1) {
		msgid = 5;
	}else{
        msgid = 4;
	}
	popup.afficherMessage(msgid);
    }
};
 /* Fin de la méthode terminer() */

// Méthode : pour masquer la correction	
exercice.masquerCorrection = function () {
	document.getElementById("zone_correction").style.display = "none";
	document.getElementById("zone_saisie").style.display = "block";
}; // Fin de la méthode masquer_correction()


// Méthode : pour réinitialiser la zone de saisie...
exercice.recommencerSaisie = function () {
	document.getElementById("ma_saisie").value = document.getElementById("fourni").textContent;
    sessionStorage.clear();
	if (profil.retourne("ejdictoProfilAmenagement")){
	  $("#assistant").hide();
	}
}; // Fin de la méthode recommencer()

// Fin des méthodes de la classe exercice

exports.exercice = exercice;


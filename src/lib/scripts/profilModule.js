/* ==================================== *
 *            Skelapp                   *
 * ==================================== *
 * (c)2021 - Patrick Cardona       *
 * Licence GPL version 3 ou ultérieure  *
 * VOIR la licence complète à la racine *
 * ==================================== */

/* Gestion du PROFIL de l'utilisateur */

/* Objet profil */

var profil = {};

/* Méthodes de l'objet Profil */

profil.retourne = function(cle, defaut){
   if (localStorage.getItem(cle)){
    valeur = localStorage.getItem(cle);
    }else{
    valeur = defaut;
    }
    return valeur;
};


profil.changeNiveau = function() {
      let niveau = $("#niveau_choisi").val();
      localStorage.setItem("appProfilNiveau", niveau);
};

/* On expose l'objet profil */
exports.profil = profil;
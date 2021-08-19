#!/user/bin/env bash
# Personnalise le modèle Skelapp avec le npm de l'application, etc.

MENU_ACCUEIL=./static/config/menu_accueil.json
MANIFEST=manifest.webmanifest
OFFLINE=offline.html
PACKAGE=package.json
ROBOTS=robots.txt

# On récupère les données à adapter
echo "Nom de votre application (un mot unique, en minuscules, sans accents):"
read NOM_APP
echo -e "\nDescription en quelques mots:"
read DESC_APP

# Bilan
clear
echo "Nom de l'application: ${NOM_APP}"
echo "Description : ${DESC_APP}"
echo "Appliquer les changements ? O|n puis <Entrée>"
read ACTION

case $ACTION in
	"n"|"N")
	echo "Abandon" && exit 1
	;;
	"o"|"O")
	echo "Oui"
	;;
	*)
	echo "Par défaut: oui"
	;;
esac

# On applique les changements...

for fic in ${MENU_ACCUEIL} ${MANIFEST} ${OFFLINE} ${PACKAGE} ${ROBOTS}
do
	if [[ -f $fic ]];then
		cat $fic|sed s/_mon_application_/"${NOM_APP}"/|sed s/_description_/"${DESC_APP}"/>${fic}_subst.txt
		mv ${fic}_subst.txt $fic
	fi
done

echo "Les changements ont été appliqués."

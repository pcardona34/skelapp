#!/usr/bin/env bash
# Installation des images de logo et du favicon
# (c) P. Cardona

# Chemin absolu vers le dossier chambre noire
# Adaptez-le à votre contexte
PROJET="$1"
IMAGES=$HOME/MES_SITES/pcardona34_github_io/${PROJET}/darkroom
CIBLE=$HOME/MES_SITES/pcardona34_github_io/${PROJET}

# On vérifie ce dossier
if [[ -d $IMAGES ]];then
	echo "Le dossier des images existe:"
	echo "$IMAGES"
else
	echo "Erreur: aucun dossier images valable"
	exit 1
fi

# Nom Image source
LOGO="logo"

# On sauvegarde l'image source
if [[ -f $IMAGES/$LOGO.jpg ]];then
        echo "Le fichier source du logo est sauvegardé:"
        cp "$IMAGES/$LOGO.jpg" "$IMAGES/${LOGO}.save"
else
        echo "Erreur: aucune source de logo valable"
        exit 1
fi

# On installe les images
echo "Installation des images:"
# En jpeg d'abord :
for dim in 16 32 48 72 96 144 168 180
do
	echo "Format JPEG ${dim}x$dim"
	mv "$IMAGES/$LOGO${dim}.jpg" "$CIBLE/static/images/"
done
mv "$IMAGES/$LOGO.jpg" "$CIBLE/static/images/"

# En png :

for dim in 192 512
do
        echo "Format PNG ${dim}x$dim"
        mv "$IMAGES/$LOGO${dim}.png" "$CIBLE/static/images/"
done

# Et pour finir, le favicon
echo "Favicon..."
mv "$IMAGES/favicon.ico" "$CIBLE"

# Ménage
find $IMAGES -iname "*.ico" -exec rm \{} \;
find $IMAGES -iname "*.jpg" -exec rm \{} \;
mv $IMAGES/$LOGO.save $IMAGES/$LOGO.jpg


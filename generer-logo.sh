#!/usr/bin/env bash
# Génération des images de logo et du favicon
# Inspiré de :  https://guides.wp-bullet.com/batch-resize-images-using-linux-command-line-and-imagemagick/
# Adaptation : P. Cardona

# Chemin absolu vers le dossier chambre noire
# Adaptez-le à votre contexte
PROJET="$1"
IMAGES=$HOME/MES_SITES/pcardona34_github_io/${PROJET}/darkroom
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

# On vérifie l'image source
if [[ -f $IMAGES/$LOGO.jpg ]];then
        echo "Le fichier source du logo existe:"
        echo "$IMAGES/$LOGO.jpg"
	echo "Dimensions: $(identify -format %wx%h $IMAGES/$LOGO.jpg)"
else
        echo "Erreur: aucune source de logo valable !"
	echo "Copiez logo.jpg dans $IMAGES"
        exit 1
fi

# Taille de départ
convert -resize 584 $IMAGES/$LOGO.jpg $IMAGES/${LOGO}584.jpg
mv $IMAGES/${LOGO}584.jpg $IMAGES/$LOGO.jpg

echo "Génération des images du projets:"
# On peut créer par lots les variantes du logo
# En jpeg d'abord :
for dim in 16 32 48 72 96 144 168 180
do
	echo "Format JPEG ${dim}x$dim"
	cp $IMAGES/$LOGO.jpg "$IMAGES/$LOGO${dim}.jpg"
	find $IMAGES -iname "$LOGO${dim}.jpg" -exec convert \{} -resize ${dim}x${dim}\> \{} \;
done

# En png :

for dim in 192 512
do
        echo "Format PNG ${dim}x$dim"
        cp $IMAGES/$LOGO.jpg "$IMAGES/$LOGO${dim}.jpg"
        find $IMAGES -iname "$LOGO${dim}.jpg" -exec convert \{} -resize ${dim}x${dim}\> $IMAGES/$LOGO${dim}.png \;
done

# Et pour finir, le favicon

for dim in 16 32
do
	cp $IMAGES/$LOGO.jpg "$IMAGES/$LOGO${dim}_ico.jpg"
	find $IMAGES -iname "$LOGO${dim}_ico.jpg" -exec convert \{} -resize ${dim}x${dim} -gravity center -crop ${dim}x${dim}+0+0 -flatten -colors 256\> $IMAGES/output-${dim}x${dim}.ico \;
done

convert $IMAGES/output-16x16.ico $IMAGES/output-32x32.ico $IMAGES/favicon.ico
echo "Le favicon a été généré."


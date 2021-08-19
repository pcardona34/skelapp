#!/bin/sh

echo "Outils de Skelapp : $0"

if [[ "$1" != "" ]];then
  TACHE=$1 && echo "Tâche : $TACHE";
  SCRIPT=$0;
else
  echo "Erreur dans $0 : aucun argment."
  help
  exit 1
fi

### Fonctions

help() {

echo "Pour exécuter une tâche :"
echo "npm run [tache]"
echo "--------------------------------"
echo "Tâches principales disponibles :"
echo "--------------------------------"
echo "dev : exécute le serveur de développement (Budo)"
echo "build : crée le bundle principal de l'application"
echo "test : exécute un serveur HTTP local afin de tester le bundle en pré-production."
echo "clean : nettoie le dossier 'build' avant le déploiement"
echo "deploy : déploie en production vers les pages Github (gh-pages)"
echo "--------------------------------"
echo "Tâches secondaires disponibles :"
echo "--------------------------------"
echo "vendors : minifie les ressouces tierces avant la mise en production."
echo "--------------------------------"
}



build() {

if [[ -f index.html ]];then
  rm --verbose index.html
fi
cp --verbose index_pwa.html index.html

echo "Building main bundle to app..."
browserify src/main.js -t hbsfy -o build/app.js;
echo "Done."
echo "Cleaning and minifying CSS : lib"
echo "- app.css" && cleancss -o public/lib/styles/app.min.css src/lib/styles/app.css;
echo "Minifying JS..."
echo "- main app bundle..." && jsmin -o public/app.min.js build/app.js;
echo "All is done !";

}

clean() {

### Clearing
# Test : is the python http server alive...?
ps -T|grep python3
if [[ $? = 0 ]];then
HTTP=$(ps -C python3 -o pid=)
echo "Stopping Python http server / Arrêt du serveur Http Python..."
kill -9 $HTTP
echo "Done / Fini."
fi

### Other cleaning task ?
if [[ -f build/app.js ]];then
  rm --verbose build/app.js
fi

}

deploy() {

. ./VERSION
echo "Publishing on the gh-pages..."

git add *
sleep 3
git commit -m "Mise à jour : version $VERSION"
git push

}

dev() {

if [[ -f index.html ]];then
  rm --verbose index.html
fi
cp --verbose index_dev.html index.html

echo "Serveur de développement..." && budo src/main.js --live --serve build/app.js -- -t hbsfy
}


testing() {

echo "Testing build app before publishing..."
echo "You should run : 'npm run build' before !"
http-server ./

}

vendors() {

echo "Cleaning and minifying CSS : vendors..."
echo "1) w3.css..." && cleancss -o vendor/w3school/styles/w3.min.css vendor/w3school/styles/w3.css;
echo "2) IcoMoon icons..." && cleancss -o vendor/icomoon/style.min.css vendor/icomoon/style.css;
#echo "Minifying JS..."
echo "All is done !";
}

# On exécute la tâche

case $TACHE in
  "build")
  build;;
  "clean")
  clean;;
  "deploy")
  deploy;;
  "dev")
  dev;;
  "test")
  testing;;
  "vendors")
  vendors;;
  "help")
  help;;
  *)
  echo "Argument $TACHE : tâche inconnue dans $SCRIPT";
  exit 1;
esac

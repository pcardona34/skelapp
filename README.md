# Skelapp

Modèle d'application pour un exerciseur.
(c) 2021 - Patrick Cardona

Ce modèle permet de lister les exercices, de les filtrer par nom ou par niveau (notion de profil).
Le contexte de sélection et d'exécution de l'exercice permet de le lier avec des mentions légales et avec la consigne.
Il permet également la gestion des liens de licence et autres mentions de type à-propos...
Bien entendu, il vous faut encore développer la partie propre à l'exercice lui-même.
Pour vous faire une idée d'une application complète fondée sur Skelapp, voyez l'exemple de [ejDicto](https://github.com/pcardona34/ejdicto)

## Usages mobiles

+ Cette application est capable de s'adapter aux usages mobiles.
+ L'installation et le fonctionnement de l'application Web progressive (PWA) ont été testés avec succès 
 dans un environnement *Androïd*. Cette version est adaptative et intègre des fonctionnalités 
 propres à l'usage mobile comme le partage.
+ Son installation est automatiquement proposée quand on affiche la page d'accueil du site dans le 
navigateur *Chrome* pour *Androïd*. Elle disposera alors d'une icône et 
sera vue comme une application à part entière.

## Pour adapter le logiciel à vos besoins

### Prérequis

+ Vous devez disposer d'un environnement de développement approprié 
(station de travail GNU/linux, Mac OS ou Windows avec les 
outils de développement activés : notamment l'interpréteur de commandes 
(shell) Bash. Vérifiez la présence de ces outils en ouvrant une console 
et en affichant leur version, sinon il faudra les installer.

    bash --version;
    node --version;
    npm --version;
    git --version;
    display --version

+ Pour les installer : Bash est présent sur GNU/Linux et Mac OS. 
[bash: sous Windows 10](https://korben.info/installer-shell-bash-linux-windows-10.html), 
[node](https://nodejs.dev/how-to-install-nodejs), 
[npm](https://www.npmjs.com/get-npm) sera installé avec nodejs, 
[git](https://git-scm.com),
[ImageMagick](https://imagemagick.org/)

Maintenant que le gestionnaire npm est disponible, vous devez aussi installer :

+ [browserify](https://browserify.org/)
+ [budo](https://www.npmjs.com/package/budo/v/11.0.0)
+ [clean-css-cli](https://github.com/clean-css/clean-css-cli#install)

À savoir :

    sudo npm install -g browserify
    sudo npm install -g budo
    sudo npm install clean-css-cli -g

+ Parfait ! Vous pouvez passer à l'installation de la fabrique.

### Première installation de la fabrique

    git clone https://github.com/pcardona34/skelapp/
    cd skelapp
    bash ./adapter.sh
    npm install

### Installation de votre logo

Copiez votre logo au format JPEG, nommé `logo.jpg` dans le sous-dossier `darkroom`.
Pour générer les images de votre projet, exécutez :

    npm run logo

### Pour exécuter le serveur de développement

    npm run dev

+ Affichez l'application en phase de développement, par exemple à l'URL :

    http://127.0.0.1:9966/

+ Pour une personnalisation avancée, le code à adapter à vos besoins se situe dans les dossiers  
`src` et `src/lib`. Il faut notamment placer la structure de votre exercice dans la page `exerciceTemplate.hbs` et adapter le code de la section de routage dans `main.js` en conséquence.
+ Pour arrêter le serveur de développement : `Ctrl + C`

### Pour ajouter de nouveaux exercices

+ Pour ajouter de nouveaux exercices : respectez les 
modèles au format JSON `exercicex.json` (exercice x) puis déposez ces nouvelles données dans `static/data`.
+ Pensez aussi à actualiser en conséquence la liste des exercices, en adaptant le contenu du fichier `liste_exercices.json` au 
format JSON dans le dossier `static/config`.

## Pour préparer une version de production

+ La publication des scripts et des feuilles de style est effectuée dans le dossier `public`.

### La première fois seulement

+ Pour créer une version minifiée des bibliothèques css et javascript 
externes. Il s'agit notamment des styles fournis par 
w3school, ainsi que la police d'icones IcoMoon.

    npm run vendors

### La première fois et les suivantes

    npm run build
    npm run test

+ Testez la version de pré-production dans votre navigateur à l'URL indiquée par le serveur après son 
démarrage, par exemple&nbsp;:

    http://localhost:8080/

+ Pour arrêter le serveur de test : `Ctrl + C`

## Pour publier vers les pages de Github (gh-pages)

+ La cible de la publication est la branche *gh-pages* qui coïncide avec la branche *master*.
+ Effectuez préalablement ce réglage dans les paramètres de votre dépôt 
Github la première fois. Vous devez aussi créer un token d'authentification comme expliqué dans la documentation de Github.

Puis exécutez:

    npm run clean;
    npm run deploy

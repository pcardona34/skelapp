# Skelapp

Modèle d'application pour un exerciseur.
(c) 2021 - Patrick Cardona

+ Ce modèle permet de lister les exercices, de les filtrer par nom ou par niveau (notion de profil).
Le contexte de sélection et d'exécution de l'exercice permet de le lier avec des mentions légales ainsi que la consigne.
Il permet également la gestion des liens de licence et autres mentions de type à-propos...
Bien entendu, il vous faut encore développer la partie propre à l'exercice lui-même. Voir cette section.

+ Pour vous faire une idée d'une application complète fondée sur Skelapp, voyez les exemples de [ejDicto](https://github.com/pcardona34/ejdicto) ou [ejMemor](https://github.com/pcardona34/ejmemor)...

## Usages mobiles

+ Cette application est capable de s'adapter aux usages mobiles.
+ Notamment l'installation et le fonctionnement de l'application Web progressive (PWA) ont été testés avec succès 
  + dans un environnement *Androïd*. Cette version est adaptative et intègre des fonctionnalités 
 propres à l'usage mobile comme le partage.
  + Son installation est automatiquement proposée quand on affiche la page d'accueil du site dans le 
navigateur *Chrome* pour *Androïd*. Elle disposera alors d'une icône et sera vue comme une application à part entière.

## Pour adapter le logiciel à vos besoins

### Prérequis

Vous devez disposer d'un environnement de développement approprié avec les outils de développement activés: notamment l'interpréteur de commandes (shell) *Bash*. Vérifiez la présence de ces outils en ouvrant une console ou un terminal et en affichant leur version, sinon il faudra les installer.

    bash --version;
    node --version;
    npm --version;
    git --version;
    display --version

Pour les installer respectivement : 

+ Bash est déjà présent sur GNU/Linux et Mac OS. 
[bash: sous Windows 10](https://korben.info/installer-shell-bash-linux-windows-10.html), 
+ [node](https://nodejs.dev/how-to-install-nodejs), 
+ [npm](https://www.npmjs.com/get-npm) sera installé avec nodejs,
+ [git](https://git-scm.com),
+ [ImageMagick](https://imagemagick.org/)

Maintenant que le gestionnaire npm est disponible, vous devez aussi installer :

+ [browserify](https://browserify.org/)
+ [budo](https://www.npmjs.com/package/budo/v/11.0.0)
+ [clean-css-cli](https://github.com/clean-css/clean-css-cli#install)

À savoir :

    sudo npm install -g browserify
    sudo npm install -g budo
    sudo npm install clean-css-cli -g

+ Parfait ! Vous pouvez passer à l'installation de la fabrique de votre application.

### Première installation de la fabrique

Pour créer un nouveau projet à base de Skelapp :

    git clone https://github.com/pcardona34/skelapp/ mon_projet
    cd mon_projet

Pour personnaliser le modèle : *nom, description...*

    bash ./adapter.sh

Pour installer les dépendances :

    npm install

### Installation de votre logo

Copiez votre logo au format JPEG, nommé impérativement `logo.jpg`, dans le sous-dossier `darkroom`.
Pour générer les images de votre projet, exécutez :

    npm run logo
 
### Personnalisation des icônes

Si vous souhaitez ajouter des icônes à votre application:

1. Importez le fichier `vendor/icomoon/selection.json` dans un projet de [l'application Icomoon](https://icomoon.io/app)...
2. Ajoutez les icônes nécessaires dans l'onglet de `Selection`.
3. Puis générez la police d'icônes dans l'onglet `Generate Font`.
4. Téléchargez la police obtenue en cliquant sur le bouton  \[Download\].
5. Décompressez l'archive ZIP `icomoon(...).zip` dans un dossier temporaire et copiez dans `vendor/icomoon`:

  + Les fichiers de style et de sélection: `selection.json` et `style.css`,
  + Ainsi que le dossier `fonts`.

### Pour exécuter le serveur de développement

    npm run dev

+ Affichez l'application en phase de développement, par exemple à l'URL :

    http://127.0.0.1:9966/

+ Pour une personnalisation avancée, le code à adapter à vos besoins se situe dans les dossiers  
`src` et `src/lib`.
+ Il faut notamment placer la structure de votre exercice dans la page `exerciceTemplate.hbs` et adapter le code de la section de routage dans `main.js` en conséquence : section "Routage > Page du contexte Exécution de l'Exercice". Au besoin, consultez la documentation des templates [Handlebars](https://handlebarsjs.com/).

+ La logique de l'exercice doit être traitée dans le script : `src/lib/scripts/exerciceModule.js`.
+ Les surcharges du style doivent se trouver dans le fichier `src/lib/styles/exercice.css`. Notez que le modèle Skelapp est lui-même fondé sur la bibliothèque [W3CSS](https://www.w3schools.com/w3css/w3css_references.asp).

Pour arrêter le serveur de développement :

    Ctrl + C

### Pour ajouter de nouveaux exercices

+ Pour ajouter de nouveaux exercices : respectez les 
modèles au format [JSON](https://www.json.org/json-en.html) : `exercicex.json` (exercice x) et adaptez en conséquence `exerciceTemplate.hbs` et `src/lib/scripts/exerciceModule.js`.
+ Puis déposez ces nouvelles données dans `static/data`.
+ Pensez aussi à actualiser en conséquence la liste des exercices, en adaptant le contenu du fichier `liste_exercices.json` dans le dossier `static/config`.
+ Selon les niveaux envisagés, modifiez aussi `static/config/niveaux.json`.

### Adaptation de l'aide

Il est vraisembable que vous deviez adapter l'aide, notamment la section de *Prise en main* en ajoutant des lignes au tableau de la sous-page : `src/aides/aidePriseEnMain.hbs`.

## Pour préparer une version de production

+ La publication des scripts et des feuilles de style est effectuée dans le dossier `public`.

### La première fois seulement

Pour créer une version minifiée des bibliothèques css et javascript 
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
Github la première fois. Vous devez aussi créer un _token_ d'authentification comme expliqué dans la documentation de Github.

Puis exécutez:

    npm run clean;
    npm run deploy

## Compatibilité

### Avec le routeur Navigo

+ Pour des raisons de compatibilité, la version du routeur Navigo est figée à la `version 7.1.2`.
+ Si vous modifiez cette version dans le fichier de configuration `package.json` pour migrer vers la version 8 de ce routeur, vous risquez de briser tous les liens de routage et de produire une application inutilisable. Vous voilà prévenu.e.

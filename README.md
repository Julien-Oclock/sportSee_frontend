# Sportsee

Sportsee est une application qui permet à chaque utilisateur d'atteindre ses objectifs en surveillant ses progrès.

#### Prérequis :

- **NodeJs** (version 16.13)
- **NPM**
- **Git**
- **Éditeur de code** (Vscode)

## Installation

### Installation et lancement du Backend

Pour utiliser le backend du projet, vous devez cloner l'API depuis OpenClassrooms-Student-Center.

[Repo Github du backend](https://github.com/Julien-Oclock/P9-front-end-dashboard)

Copiez le lien https ou ssh présent sur le repo afin de récupérer le projet

Ouvrez un terminal et suivez les instructions ci-dessous.

```bash
git clone <lien-ssh-du-repo>
cd P9-front-end-dashboard
npm install
```

Ensuite, lancez l'API

```bash
npm start
```

Vous devriez voir apparaitre les message suivant, cela signifie que votre backend est bien lancer sur le port 3000

```bash
> P9-front-end-dashboard@1.0.0 start
> node app/index.js

Magic happens on port 3000
```

### Installation et lancement du Frontend

Pour utiliser le frontend du projet, rendez-vous sur le lien suivant et cloner le repo dans un nouveau terminal.

```bash
git clone <lien-ssh-du-repo>
cd sportSee_frontend
npm install
```

Ensuite, lancez l'API

```bash
npm start
```

Par default, React lance l'application sur le port 3000. COmme le backend du projet tourne déjà sur ce port vous devriez voi apparaitre le message suivant

```bash
? Something is already running on port 3000.

Would you like to run the app on another port instead? » (Y/n)
```

Cliquez sur Y ou pressez la touche 'Y' de votre clavier pour oui et c'est tout ! Vous devriez voir le message suivant

```bash
You can now view sportSee_frontend in the browser.

Local:            http://localhost:3001
```

### Changer les données

Pour passer des données à Mock ou à API, vous pouvez dans /src/Service/dataService.js modifier et sélectionner source.api ou source.mock

```react
<SourceContext.Provider value={{ source: source.api }}>
```

### Changer d'utilisateur

Si vous voulez changer d'utilisateur, dans l'URL de votre navigateur, vous pouvez choisir l'identifiant utilisateur.
Seuls les identifiants 12 et 18 fonctionnent.

Par exemple, si vous voulez visualiser les données de l'utilisateur dont l'ID est 12, allez sur :
http://localhost:3001/user/12

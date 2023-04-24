# Sportsee

Sportsee is an application that allows each user to reach their goals by monitoring their progress.
#### Prérequis :

- **NodeJs** (version 16.13)
- **NPM**
- **Git**
- **Code editor ** (Vscode)

## Installation

### Installation and Launch of the Backend

To use the project's backend, you must clone the API from OpenClassrooms-Student-Center.

[Repo Github du backend](https://github.com/Julien-Oclock/P9-front-end-dashboard)

Copy the https or ssh link present on the repo to retrieve the project.

Open a terminal and follow the instructions below.

```bash
git clone <lien-ssh-du-repo>
cd P9-front-end-dashboard
npm install
```

Then, launch the API


To launch the project using data from the API:
```bash
npm start
```

To launch the project using data from the Mock:
```bash
npm run start-mock
```

You should see the following message appear, indicating that your backend is running on port 3000:

```bash
> P9-front-end-dashboard@1.0.0 start
> node app/index.js

Magic happens on port 3000
```

### Installation and Launch of the Frontend

To use the project's frontend, go to the following link and clone the repo in a new terminal.

```bash
git clone <lien-ssh-du-repo>
cd sportSee_frontend
npm install
```

Then, launch the app

```bash
npm start
```

By default, React launches the application on port 3000. As the project's backend is already running on this port, you should see the following message:

```bash
? Something is already running on port 3000.

Would you like to run the app on another port instead? » (Y/n)
```

Click Y or press the 'Y' key on your keyboard for yes, and that's it! You should see the following message:

```bash
You can now view sportSee_frontend in the browser.

Local:            http://localhost:3001
```

### Changing Users

If you want to change users, in your browser's URL, you can choose the user ID. Only user IDs 12 and 18 work

For example, if you want to view the data of the user whose ID is 12, go to:
http://localhost:3001/user/12





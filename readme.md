# To-Do List Application

Une application de gestion de tâches simple et moderne développée avec React, TypeScript et Axios pour interagir avec une API.

## Description

L'application "To-Do List" permet aux utilisateurs de gérer leurs tâches quotidiennes. Elle offre des fonctionnalités de base telles que l'ajout, la modification, la suppression et la gestion du statut des tâches (terminée ou en cours).

Les tâches sont récupérées depuis une API et les mises à jour sont automatiquement affichées sans nécessiter de rechargement de la page. L'application utilise un design moderne avec des couleurs attrayantes et une interface épurée, adaptée aux appareils mobiles et de bureau.

## Fonctionnalités

- **Ajouter une tâche** : Saisissez une description et ajoutez une nouvelle tâche à la liste.
- **Modifier une tâche** : Modifiez le texte d'une tâche existante.
- **Supprimer une tâche** : Supprimez des tâches de la liste.
- **Gérer le statut des tâches** : Marquez une tâche comme terminée ou non terminée.
- **Réactivité** : L'application est responsive et s'adapte à différentes tailles d'écran.

## Prérequis

Avant de commencer, assurez-vous d'avoir installé les éléments suivants sur votre machine :

- **Node.js** (version 14 ou supérieure) : [Télécharger Node.js](https://nodejs.org/)
- **npm** (Node Package Manager) ou **yarn** pour gérer les dépendances.

## Installation

1. Clonez ce dépôt sur votre machine locale :

   ```bash
   git clone https://github.com/votre-nom-utilisateur/to-do-list.git
   cd to-do-list
	 ```
2. Installez les dépendances :
   ```bash
   npm install
   # ou
   yarn install
   ```
3. Lancez l'application en mode développement :
   ```bash
   npm start
   # ou
   yarn start
   ```
4. Ouvrez votre navigateur web et accédez à `http://localhost:3000` pour utiliser l'application.

## Structure du projet

Voici un aperçu de la structure du projet :

```Bash
to-do-list/
├── public/
│   └── index.html            # Fichier HTML principal
├── src/
│   ├── components/
│   │   ├── AddTask.tsx       # Composant pour ajouter une tâche
│   │   └── TaskList.tsx      # Composant pour afficher la liste des tâches
│   ├── App.tsx               # Composant principal de l'application
│   ├── main.tsx              # Point d'entrée de l'application
│   └── styles/
│       └── index.css         # Fichier CSS global
├── package.json              # Dépendances et configurations du projet
└── tsconfig.json             # Configuration TypeScript
```

## Technologies Utilisées

- Node.js : Environnement d'exécution JavaScript côté serveur.

- Express : Framework web pour Node.js.

- React : Librairie JavaScript pour construire l'interface utilisateur.

- TypeScript : Surcouche de JavaScript permettant une typage statique et des outils de développement améliorés.

- Axios : Librairie pour effectuer des requêtes HTTP et interagir avec l'API.

- Tailwind CSS : Framework CSS utilitaire pour un design rapide et flexible.

- Vite : Outil de construction ultra-rapide pour les projets React.

## API Backend

L'application est connectée à une API qui permet de gérer les tâches. Voici quelques endpoints utilisés dans l'application :

- GET `/api/tasks` : Récupérer toutes les tâches.

- POST `/api/tasks` : Ajouter une nouvelle tâche.

- PUT `/api/tasks/:id` : Modifier une tâche existante (mettre à jour le texte ou le statut).

- DELETE `/api/tasks/:id` : Supprimer une tâche.

## Améliorations possibles

- Authentification : Ajouter un système d'authentification pour permettre aux utilisateurs de se connecter et de gérer leurs tâches personnelles.

- Priorisation des tâches : Ajouter un champ de priorité pour chaque tâche et permettre de trier les tâches par priorité.

- Notifications : Ajouter des notifications pour rappeler les tâches non terminées.

- API publique : Déployer l'API sur un service comme Heroku ou Render.

## Contribution

Les contributions sont les bienvenues ! Si vous souhaitez améliorer cette application, veuillez suivre ces étapes :

1. Fork ce dépôt.

2. Créez une branche pour votre fonctionnalité (git checkout -b feature/nom-de-la-fonctionnalité).

3. Effectuez vos modifications et committez-les (git commit -am 'Ajout de ma fonctionnalité').

4. Poussez votre branche (git push origin feature/nom-de-la-fonctionnalité).

5. Ouvrez une pull request.


## Auteurs

- [@josephDelnord](https://github.com/josephDelnord)
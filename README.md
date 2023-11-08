# Projet de Recommandations de Voyages en Angular

Ce projet est une application Angular destinée à recommander des destinations de voyage en fonction des préférences des utilisateurs et de leur budget. Il inclut également des fonctionnalités de réservation de voyages pour les utilisateurs authentifiés.

## Configuration requise

- [Node.js](https://nodejs.org/) (version 14.x ou supérieure)
- [Angular CLI](https://cli.angular.io/) (version 12.x ou supérieure)

## Installation

1. Clonez ce référentiel : `git clone https://github.com/Lucasmes93/ProjetVoyage_FrontEnd`
2. Accédez au répertoire du projet : `cd nom-de-votre-projet`

3. Installez les dépendances Node.js : `npm install`

## Développement

- Lancez le serveur de développement Angular : `ng serve`

L'application sera disponible à l'adresse http://localhost:4200/. Elle se rechargera automatiquement lorsque vous apportez des modifications au code.

## Utilisation

- Création de compte : Les utilisateurs peuvent créer un compte avec leur nom d'utilisateur et mot de passe.
- Profil utilisateur : Les utilisateurs peuvent ajouter leurs préférences de voyage et leur budget dans leur profil.
- Destinations : Parcourez les destinations de voyage recommandées et consultez les détails.
- Réservations : Les utilisateurs authentifiés peuvent effectuer des réservations de voyages pour les destinations.

## Endpoints API

L'application expose une API REST avec les endpoints suivants :

- `/api/userprofile/`: CRUD pour les profils d'utilisateurs.
- `/api/destinations/`: CRUD pour les destinations de voyage.
- `/api/bookings/`: CRUD pour les réservations de voyages.


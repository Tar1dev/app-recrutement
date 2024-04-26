# App de recrutement

## Déploiement de l'application :
⚠️ *Placez-vous dans le répertoire de l'application.*
- ### Installation des dépendances
  - ```npm install```
- ### Initialisation de prisma
  - ```npx prisma init```
- ### Lancement de l'application
  - ```sudo docker-compose up -d```
- ### Synchronisation avec la base de données
  - ```sudo npx prisma migrate dev``

⚠️ Par défaut, l'application se lance sur le port 3000.

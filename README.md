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
  - ```sudo npx prisma migrate dev```
  - ```sudo npx prisma generate```

⚠️ Par défaut, l'application se lance sur le port 3000. Pour des raisons de sécurité évidentes, le fichier .env n'est pas sur le repo.
Il faut donc le créer et spécifier le "PORT" puis la "DATABASE_URL"

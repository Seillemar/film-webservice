API ADONIS FILMS

Lucas Koellsch, Valentin Hustache

    Prérequis

        Avant de commencer, assurez-vous d'avoir les logiciels suivants installés sur votre machine :

        Docker
        Node.js

    Instructions d'exécution

        Clonez le dépôt.

        git clone https://github.com/Seillemar/film-webservice

        Naviguez vers le répertoire du projet.

        cd film-webservice

        Construisez l'image Docker.

        docker-compose build

        Démarrez les conteneurs.

        docker-compose up

        Le serveur AdonisJS et la base de données MySQL seront maintenant lancés.

    Accédez à l'API.

        L'API est accessible à l'adresse http://localhost:3333.

    Exécutez le seeder pour peupler la base de données avec des données de test.

        docker-compose run web adonis seed --files FilmSeeder.js

        Cela créera quelques films fictifs dans la base de données.

    API Endpoints

        GET /api/v1/films: Récupérer la liste des films.
        GET /api/v1/films/:id: Récupérer un film par son ID.
        POST /api/v1/films: Créer un nouveau film.
        PUT /api/v1/films/:id: Mettre à jour un film par son ID.
        DELETE /api/v1/films/:id: Supprimer un film par son ID.

    Exemples de Requêtes HTTP

        Vous pouvez utiliser des outils comme curl ou Postman pour tester les endpoints de l'API. Voici quelques exemples de requêtes HTTP avec curl :

        Récupérer la liste des films

        curl -X GET http://localhost:3333/api/v1/films

        Créer un nouveau film

        curl -X POST -H "Content-Type: application/json" -d '{"nom":"Nom du Film","description":"Description du film.","date_parution":"2023-01-01","note":4}' http://localhost:3333/api/v1/films

        Mettre à jour un film

        curl -X PUT -H "Content-Type: application/json" -d '{"nom":"Nouveau Nom","description":"Nouvelle description du film.","date_parution":"2023-02-01","note":5}' http://localhost:3333/api/v1/films/1

        Supprimer un film

        curl -X DELETE http://localhost:3333/api/v1/films/1

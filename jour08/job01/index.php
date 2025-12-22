<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Job 01</title>
</head>

<body>

    <header>
        <nav>
            <ul>
                <li><a href="index.html">Accueil</a></li>
                <li><a href="index.html">Inscription</a></li>
                <li><a href="index.html">Connexion</a></li>
                <li><a href="index.html">Rechercher</a></li>
            </ul>
        </nav>
    </header>

    <form action="">

        <p>
            <label>
                <input type="radio" id="homme" name="genre" value="homme" />
                <span>Monsieur</span>
            </label>
            <label>
                <input type="radio" id="femme" name="genre" value="femme" />
                <span>Madame</span>
            </label>
        </p>

        <label for="prenom">Prénom</label>
        <input type="text"><br>
        <label for="nom">Nom</label>
        <input type="text"><br>
        <label for="adresse">Adresse</label>
        <input type="text"><br>

        <label for="email">Email</label>
        <input type="email"><br>

        <label for="password">Mot de passe</label>
        <input type="password"><br>
        <label for="confirm-password">Confirmer le mot de passe</label>
        <input type="password"><br>

        <h4>Vos passions</h4>
        <label>
            <input id="checkbox" type="checkbox" />
            <span>Informatique</span>
        </label>
        <label>
            <input id="checkbox" type="checkbox" />
            <span>Voyages</span>
        </label>
        <label>
            <input id="checkbox" type="checkbox" />
            <span>Sport</span>
        </label>
        <label>
            <input id="checkbox" type="checkbox" />
            <span>Lecture</span>
        </label><br>

        <button type="submit">Envoyer</button>

    </form>

    <footer>
        <ul>
            <li><a href="index.html">Accueil</a></li>
            <li><a href="index.html">Inscription</a></li>
            <li><a href="index.html">Connexion</a></li>
            <li><a href="index.html">Rechercher</a></li>
        </ul>
    </footer>

</body>

</html>
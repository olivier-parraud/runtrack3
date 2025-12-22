<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Taquin</title>
    <link rel="stylesheet" href="assets/style.css">
</head>

<body>

    <div class="page">
        <div class="container">
            <h1>Taquin</h1>
            <button>Jouer</button>
            <button id="reset">Réinitialiser</button>

            <div class="jeu">
                <div class="case"><img src="assets/img/1.png" alt="1"></div>
                <div class="case"><img src="assets/img/2.png" alt="2"></div>
                <div class="case"><img src="assets/img/3.png" alt="3"></div>
                <div class="case"><img src="assets/img/4.png" alt="4"></div>
                <div class="case"><img src="assets/img/5.png" alt="5"></div>
                <div class="case"><img src="assets/img/6.png" alt="6"></div>
                <div class="case"><img src="assets/img/7.png" alt="7"></div>
                <div class="case"><img src="assets/img/8.png" alt="8"></div>
                <div class="case"><img src="assets/img/9.png" alt="9"></div>
                <div class="case empty"></div>
            </div>

            <div class="info">
                <h3 class="count">Nombre de coups : 0</h3>
                <h3 class="time">Temps : 0m 0s</h3>
            </div>

            <div class="win"></div>

        </div>
    </div>





    <script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
    <script src="https://code.jquery.com/ui/1.13.2/jquery-ui.min.js"></script>
    <script src="./script.js"></script>
</body>

</html>
<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Arc en ciel</title>
    <link rel="stylesheet" href="assets/style.css">
</head>

<body>

    <div class="tapis">

        <div id="source">
            <img src="assets/img/arc1.png" data-pos="1" id="arc1" class="piece">
            <img src="assets/img/arc2.png" data-pos="2" id="arc2" class="piece">
            <img src="assets/img/arc3.png" data-pos="3" id="arc3" class="piece">
            <img src="assets/img/arc4.png" data-pos="4" id="arc4" class="piece">
            <img src="assets/img/arc5.png" data-pos="5" id="arc5" class="piece">
            <img src="assets/img/arc6.png" data-pos="6" id="arc6" class="piece">
        </div>

        <div id="jeu" class="zone">
            <div class="slot" data-slot="1"></div>
            <div class="slot" data-slot="2"></div>
            <div class="slot" data-slot="3"></div>
            <div class="slot" data-slot="4"></div>
            <div class="slot" data-slot="5"></div>
            <div class="slot" data-slot="6"></div>
        </div>

    </div>

    <div id="result"></div>
    <button id="shuffle">Mélanger</button>

    <script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
    <script src="https://code.jquery.com/ui/1.13.2/jquery-ui.min.js"></script>
    <script src="./script.js"></script>
</body>

</html>
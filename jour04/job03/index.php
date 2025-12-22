<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Job 03</title>
    <link rel="stylesheet" href="style.css">
</head>

<body>

    <form class="form" id="filterForm">
        <input name="id" type="text" placeholder="ID">
        <input name="nom" type="text" placeholder="Nom">
        <select name="type">
            <option value="">Type</option>
        </select>
        <input class="btn" name="filtrer" type="button" value="Filtrer">
    </form>
    <div class="results" id="results"></div>


    <script src="./script.js"></script>
</body>

</html>
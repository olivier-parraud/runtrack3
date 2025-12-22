async function jsonValueKey(jsonString, key) {
    try {
        let objet = JSON.parse(jsonString);
        // Si la clé existe, retourne sa valeur, sinon retourne null
        return objet.hasOwnProperty(key) ? objet[key] : null; //Fonction ternaire ? :
    } catch (error) {
        console.error("Chaine invalide :", error);
        return null;
    }
}

let jsonString = '{"nom": "La Plateforme_", "adresse": "8 rue d\'hozier", "ville": "Marseille", "nb_staff": "11", "creation": "2019"}';

jsonValueKey(jsonString, "ville").then(result => console.log(result));
jsonValueKey(jsonString, "creation").then(result => console.log(result));
jsonValueKey(jsonString, "nom").then(result => console.log(result));
jsonValueKey(jsonString, "pays").then(result => console.log(result));
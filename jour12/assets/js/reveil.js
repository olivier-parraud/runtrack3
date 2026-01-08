// ============================================
// VARIABLES GLOBALES DU RÉVEIL
// ============================================

// Boolean qui indique si le réveil est activé (true) ou désactivé (false)
let reveilActif = false;

// Heure à laquelle le réveil doit sonner (format 24h, de 0 à 23)
let heureReveil = 7;

// Minute à laquelle le réveil doit sonner (de 0 à 59)
let minuteReveil = 0;

// Identifiant de l'intervalle pour pouvoir l'arrêter plus tard avec clearInterval()
let intervalId = null;

// ============================================
// FONCTION: updateClockNeedles
// ============================================
// Met à jour la rotation des aiguilles de l'horloge pour afficher l'heure actuelle
function updateClockNeedles() {
    // Sélectionne l'élément HTML qui représente l'aiguille des heures
    const hourEl = document.querySelector('.hour');
    // Sélectionne l'élément HTML qui représente l'aiguille des minutes
    const minuteEl = document.querySelector('.minute');
    // Sélectionne l'élément HTML qui représente l'aiguille des secondes
    const secondEl = document.querySelector('.second');
    
    // Si l'un des éléments n'existe pas dans le DOM, on arrête la fonction
    if (!hourEl || !minuteEl || !secondEl) return;
    
    // Crée un nouvel objet Date qui contient la date et l'heure actuelles
    const maintenant = new Date();
    
    // Récupère l'heure actuelle et la convertit en format 12h (% 12)
    // Ex: 14h devient 2, 20h devient 8
    const heures = maintenant.getHours() % 12;
    
    // Récupère les minutes actuelles (0-59)
    const minutes = maintenant.getMinutes();
    
    // Récupère les secondes actuelles (0-59)
    const secondes = maintenant.getSeconds();
    
    // Applique une rotation à l'aiguille des heures
    // (heures / 12) * 360 convertit les heures en degrés (chaque heure = 30°)
    // (minutes / 60) * 30 ajoute un déplacement progressif entre chaque heure (30° max)
    // Cela permet à l'aiguille des heures de se déplacer graduellement
    hourEl.style.transform = `translate(-50%, -100%) rotate(${(heures / 12) * 360 + (minutes / 60) * 30}deg)`;
    
    // Applique une rotation à l'aiguille des minutes
    // (minutes / 60) * 360 convertit les minutes en degrés (360° pour 60 minutes)
    minuteEl.style.transform = `translate(-50%, -100%) rotate(${(minutes / 60) * 360}deg)`;
    
    // Applique une rotation à l'aiguille des secondes
    // (secondes / 60) * 360 convertit les secondes en degrés (360° pour 60 secondes)
    secondEl.style.transform = `translate(-50%, -100%) rotate(${(secondes / 60) * 360}deg)`;
}

// ============================================
// FONCTION: afficherHeureActuelle
// ============================================
// Affiche l'heure actuelle au format numérique (HH:MM)
function afficherHeureActuelle() {
    // Crée un nouvel objet Date qui contient la date et l'heure actuelles
    const maintenant = new Date();
    
    // Récupère l'heure actuelle en format 24h (0-23)
    const heures = maintenant.getHours();
    
    // Récupère les minutes actuelles (0-59)
    const minutes = maintenant.getMinutes();
    
    // Crée la chaîne d'affichage au format HH:MM
    // Utilise formatNumber pour ajouter les zéros devant les nombres < 10
    const affichage = formatNumber(heures) + ":" + formatNumber(minutes);
    
    // Modifie le contenu texte de l'élément avec l'id "affichageHeure"
    document.getElementById("affichageHeure").textContent = affichage;
}

// ============================================
// FONCTION: formatNumber
// ============================================
// Ajoute un zéro devant les nombres < 10 pour l'affichage (ex: 5 devient "05")
// Paramètres: num - le nombre à formater
// Retourne: une chaîne de caractères avec le nombre formaté
function formatNumber(num) {
    // Opérateur ternaire: si num < 10, retourne "0" + num, sinon retourne num tel quel
    return num < 10 ? '0' + num : num;
}

// ============================================
// FONCTION: toggleReveil
// ============================================
// Fonction qui bascule entre activer et désactiver le réveil
function toggleReveil() {
    // Si le réveil est activé
    if (reveilActif) {
        // On le désactive
        desactiverReveil();
    } else {
        // Sinon, on l'active
        activerReveil();
    }
}

// ============================================
// FONCTION: activerReveil
// ============================================
// Active le réveil avec l'heure et les minutes sélectionnées
function activerReveil() {
    // Récupère la valeur du champ input pour l'heure et la convertit en nombre entier
    // parseInt() convertit une chaîne de caractères en nombre entier
    heureReveil = parseInt(document.getElementById("heureReveil").value);
    
    // Récupère la valeur du champ input pour les minutes et la convertit en nombre entier
    minuteReveil = parseInt(document.getElementById("minuteReveil").value);
    
    // Passe le statut du réveil à "activé"
    reveilActif = true;
    
    // Change le contenu HTML du bouton pour afficher "Désactiver"
    // innerHTML permet de modifier le HTML interne de l'élément
    document.getElementById("btnToggleReveil").innerHTML = '<i class="fa-solid fa-bell-slash"></i> Désactiver';
    
    // Affiche un message indiquant l'heure du réveil programmé
    document.getElementById("messageReveil").textContent = "Réveil programmé pour " + formatNumber(heureReveil) + ":" + formatNumber(minuteReveil);
    
    // Change la couleur du message en vert (#4caf50)
    document.getElementById("messageReveil").style.color = "#4caf50";
    
    // Si aucun intervalle n'existe déjà (intervalId === null)
    if (intervalId === null) {
        // Crée un intervalle qui vérifie toutes les secondes (1000ms) si l'heure du réveil est atteinte
        // setInterval exécute la fonction verifierReveil toutes les 1000 millisecondes
        intervalId = setInterval(verifierReveil, 1000);
    }
}

// ============================================
// FONCTION: desactiverReveil
// ============================================
// Désactive le réveil
function desactiverReveil() {
    // Passe le statut du réveil à "désactivé"
    reveilActif = false;
    
    // Change le contenu HTML du bouton pour afficher "Activer"
    document.getElementById("btnToggleReveil").innerHTML = '<i class="fa-solid fa-bell"></i> Activer';
    
    // Efface le message de confirmation
    document.getElementById("messageReveil").textContent = "";
}

// ============================================
// FONCTION: verifierReveil
// ============================================
// Vérifie si l'heure actuelle correspond à l'heure du réveil
// Cette fonction est appelée toutes les secondes par setInterval
function verifierReveil() {
    // Si le réveil n'est pas activé, on sort de la fonction
    // Cette vérification évite de déclencher le réveil s'il a été désactivé
    if (!reveilActif) return;
    
    // Crée un nouvel objet Date qui contient la date et l'heure actuelles
    const maintenant = new Date();
    
    // Récupère l'heure actuelle (format 24h, de 0 à 23)
    const heureActuelle = maintenant.getHours();
    
    // Récupère les minutes actuelles (de 0 à 59)
    const minuteActuelle = maintenant.getMinutes();
    
    // Vérifie si l'heure ET les minutes actuelles correspondent à l'heure du réveil
    // === vérifie l'égalité stricte (valeur et type)
    // && signifie "ET" logique (les deux conditions doivent être vraies)
    if (heureActuelle === heureReveil && minuteActuelle === minuteReveil) {
        // Si l'heure correspond, on fait sonner le réveil
        sonnerReveil();
    }
}

// ============================================
// FONCTION: sonnerReveil
// ============================================
// Fait sonner le réveil en affichant une alerte
function sonnerReveil() {
    // Affiche une boîte de dialogue avec le message de réveil
    // alert() bloque l'exécution du code jusqu'à ce que l'utilisateur clique sur OK
    alert("⏰ RÉVEIL ! Il est " + formatNumber(heureReveil) + ":" + formatNumber(minuteReveil));
    
    // Désactive automatiquement le réveil après qu'il ait sonné
    desactiverReveil();
}

// ============================================
// FONCTION: mettreAJour
// ============================================
// Fonction qui met à jour l'affichage de l'horloge (numérique et aiguilles)
// Cette fonction est appelée toutes les secondes
function mettreAJour() {
    // Met à jour l'affichage numérique de l'heure
    afficherHeureActuelle();
    
    // Met à jour la position des aiguilles
    updateClockNeedles();
}

// ============================================
// INITIALISATION AU CHARGEMENT DE LA PAGE
// ============================================
// addEventListener attend qu'un événement se produise
// 'DOMContentLoaded' est déclenché quand le HTML est complètement chargé et analysé
document.addEventListener('DOMContentLoaded', function() {
    // Affiche l'heure actuelle immédiatement au chargement
    afficherHeureActuelle();
    
    // Initialise les aiguilles à leur position actuelle
    updateClockNeedles();
    
    // setInterval appelle mettreAJour() toutes les 1000 millisecondes (1 seconde)
    // Cela crée une mise à jour continue de l'horloge
    setInterval(mettreAJour, 1000);
    
    // Ajoute un écouteur d'événement au bouton avec l'id 'btnToggleReveil'
    // addEventListener("click", fonction) exécute la fonction quand on clique sur l'élément
    // toggleReveil sera appelée à chaque clic sur le bouton
    document.getElementById('btnToggleReveil').addEventListener('click', toggleReveil);
});

// ============================================
// VARIABLES GLOBALES DU CHRONOMÈTRE
// ============================================

// Variable qui stocke le nombre total de secondes écoulées depuis le début
let tempsEcoule = 0;

// Identifiant de l'intervalle pour pouvoir l'arrêter plus tard avec clearInterval()
let intervalId = null;

// Boolean qui indique si le chronomètre est en marche (true) ou en pause (false)
let enMarche = false;

// Tableau qui stocke les temps enregistrés pour chaque tour
let tours = [];

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
// FONCTION: updateClockNeedles
// ============================================
// Met à jour la rotation des aiguilles de l'horloge analogique
function updateClockNeedles() {
    // Sélectionne l'élément HTML qui représente l'aiguille des heures
    const hourEl = document.querySelector('.hour');
    // Sélectionne l'élément HTML qui représente l'aiguille des minutes
    const minuteEl = document.querySelector('.minute');
    // Sélectionne l'élément HTML qui représente l'aiguille des secondes
    const secondEl = document.querySelector('.second');
    
    // Si l'un des éléments n'existe pas dans le DOM, on arrête la fonction
    if (!hourEl || !minuteEl || !secondEl) return;
    
    // Calcule le nombre d'heures écoulées (divise par 3600 car 1h = 3600s)
    const heures = Math.floor(tempsEcoule / 3600);
    // Calcule les minutes: on prend le reste de la division par 3600, puis on divise par 60
    const minutes = Math.floor((tempsEcoule % 3600) / 60);
    // Calcule les secondes: on prend le reste de la division par 60
    const secondes = tempsEcoule % 60;
    
    // Applique une rotation à l'aiguille des heures
    // translate(-50%, -100%) centre l'aiguille sur son point de pivot
    // heures % 12 car l'horloge est sur 12h, pas 24h
    // (heures % 12 / 12) * 360 convertit les heures en degrés (360° pour 12h)
    hourEl.style.transform = `translate(-50%, -100%) rotate(${(heures % 12 / 12) * 360}deg)`;
    
    // Applique une rotation à l'aiguille des minutes
    // (minutes / 60) * 360 convertit les minutes en degrés (360° pour 60 minutes)
    minuteEl.style.transform = `translate(-50%, -100%) rotate(${(minutes / 60) * 360}deg)`;
    
    // Applique une rotation à l'aiguille des secondes
    // (secondes / 60) * 360 convertit les secondes en degrés (360° pour 60 secondes)
    secondEl.style.transform = `translate(-50%, -100%) rotate(${(secondes / 60) * 360}deg)`;
}

// ============================================
// FONCTION: toggleChrono
// ============================================
// Fonction qui bascule entre démarrer et arrêter le chronomètre
function toggleChrono() {
    // Si le chronomètre est en marche
    if (enMarche) {
        // On l'arrête
        arreter();
    } else {
        // Sinon, on le démarre
        demarrer();
    }
}

// ============================================
// FONCTION: demarrer
// ============================================
// Démarre le chronomètre
function demarrer() {
    // Passe le statut à "en marche"
    enMarche = true;
    
    // setInterval exécute une fonction toutes les X millisecondes (ici 1000ms = 1 seconde)
    intervalId = setInterval(function() {
        // Incrémente le temps écoulé de 1 seconde
        tempsEcoule++;
        // Met à jour l'affichage du temps
        afficherTemps(tempsEcoule);
        // Met à jour les aiguilles de l'horloge
        updateClockNeedles();
    }, 1000); // Exécute toutes les 1000 millisecondes (1 seconde)
    
    // Change l'icône du bouton pour afficher une icône "pause"
    // getElementById récupère l'élément avec l'id "btnToggle"
    // innerHTML modifie le contenu HTML de cet élément
    document.getElementById("btnToggle").innerHTML = '<i class="fa-solid fa-pause"></i>';
}

// ============================================
// FONCTION: arreter
// ============================================
// Arrête (met en pause) le chronomètre
function arreter() {
    // Passe le statut à "arrêté"
    enMarche = false;
    
    // clearInterval arrête l'exécution répétée de setInterval
    clearInterval(intervalId);
    
    // Réinitialise l'identifiant d'intervalle à null
    intervalId = null;
    
    // Change l'icône du bouton pour afficher une icône "play"
    document.getElementById("btnToggle").innerHTML = '<i class="fa-solid fa-play"></i>';
}

// ============================================
// FONCTION: resetChrono
// ============================================
// Réinitialise complètement le chronomètre
function resetChrono() {
    // Arrête le chronomètre s'il est en marche
    arreter();
    
    // Réinitialise le temps écoulé à zéro
    tempsEcoule = 0;
    
    // Vide le tableau des tours enregistrés
    tours = [];
    
    // Affiche 00:00:00
    afficherTemps(0);
    
    // Remet les aiguilles à leur position initiale
    updateClockNeedles();
    
    // Vide la liste HTML des tours enregistrés
    document.getElementById("listeTours").innerHTML = "";
}

// ============================================
// FONCTION: afficherTemps
// ============================================
// Affiche le temps formaté dans l'élément HTML
// Paramètres: secondes - le nombre total de secondes à afficher
function afficherTemps(secondes) {
    // Calcule le nombre d'heures (1 heure = 3600 secondes)
    // Math.floor arrondit à l'entier inférieur
    const heures = Math.floor(secondes / 3600);
    
    // Calcule les minutes restantes après avoir retiré les heures
    // % (modulo) retourne le reste de la division
    const minutes = Math.floor((secondes % 3600) / 60);
    
    // Calcule les secondes restantes
    const secs = secondes % 60;
    
    // Crée la chaîne d'affichage au format HH:MM:SS
    // Utilise formatNumber pour ajouter les zéros devant les nombres < 10
    const affichage = formatNumber(heures) + ":" + formatNumber(minutes) + ":" + formatNumber(secs);
    
    // Modifie le contenu texte de l'élément avec l'id "affichageChrono"
    // textContent modifie uniquement le texte (pas le HTML)
    document.getElementById("affichageChrono").textContent = affichage;
}

// ============================================
// FONCTION: enregistrerTour
// ============================================
// Enregistre le temps actuel comme un tour
function enregistrerTour() {
    // Si le chronomètre n'a pas démarré (temps = 0), on ne fait rien
    if (tempsEcoule === 0) return;
    
    // Ajoute le temps actuel à la fin du tableau tours
    // push() ajoute un élément à la fin d'un tableau
    tours.push(tempsEcoule);
    
    // Met à jour l'affichage de la liste des tours
    afficherTours();
}

// ============================================
// FONCTION: afficherTours
// ============================================
// Affiche la liste de tous les tours enregistrés
function afficherTours() {
    // Récupère l'élément HTML qui contiendra la liste des tours
    const listeTours = document.getElementById("listeTours");
    
    // Vide complètement le contenu HTML de la liste
    listeTours.innerHTML = "";
    
    // forEach parcourt chaque élément du tableau tours
    // Paramètres de la fonction callback: temps = valeur actuelle, index = position dans le tableau
    tours.forEach(function(temps, index) {
        // Crée un nouvel élément <li> (list item)
        const li = document.createElement("li");
        
        // Calcule les heures du tour
        const heures = Math.floor(temps / 3600);
        // Calcule les minutes du tour
        const minutes = Math.floor((temps % 3600) / 60);
        // Calcule les secondes du tour
        const secs = temps % 60;
        
        // Définit le contenu texte du <li>
        // index + 1 car les index commencent à 0 mais on veut afficher "Tour 1", "Tour 2", etc.
        li.textContent = "Tour " + (index + 1) + ": " + formatNumber(heures) + ":" + formatNumber(minutes) + ":" + formatNumber(secs);
        
        // Ajoute le <li> comme enfant de l'élément listeTours
        // appendChild() ajoute un élément à la fin d'un parent
        listeTours.appendChild(li);
    });
}

// ============================================
// INITIALISATION AU CHARGEMENT DE LA PAGE
// ============================================
// addEventListener attend qu'un événement se produise
// 'DOMContentLoaded' est déclenché quand le HTML est complètement chargé et analysé
document.addEventListener('DOMContentLoaded', function() {
    // Affiche 00:00:00 au chargement
    afficherTemps(0);
    // Initialise les aiguilles à leur position de départ
    updateClockNeedles();
});
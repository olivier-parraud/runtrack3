// ============================================
// VARIABLES GLOBALES DU MINUTEUR
// ============================================

// Variable qui stocke le temps restant en secondes (300s = 5 minutes par défaut)
let tempsRestant = 300; // 5 minutes en secondes

// Identifiant de l'intervalle pour pouvoir l'arrêter plus tard avec clearInterval()
let intervalId = null;

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
// Met à jour la rotation des aiguilles de l'horloge analogique du minuteur
function updateClockNeedles() {
    // Sélectionne l'élément HTML qui représente l'aiguille des heures
    const hourEl = document.querySelector('.hour');
    // Sélectionne l'élément HTML qui représente l'aiguille des minutes
    const minuteEl = document.querySelector('.minute');
    // Sélectionne l'élément HTML qui représente l'aiguille des secondes
    const secondEl = document.querySelector('.second');
    
    // Si l'un des éléments n'existe pas dans le DOM, on arrête la fonction
    if (!hourEl || !minuteEl || !secondEl) return;
    
    // Calcule le nombre de minutes restantes (division entière par 60)
    const minutes = Math.floor(tempsRestant / 60);
    // Calcule les secondes restantes (reste de la division par 60)
    const seconds = tempsRestant % 60;
    
    // Définit le temps total configuré (5 minutes = 300 secondes)
    const totalSeconds = 300; // 5 minutes
    
    // Calcule le ratio du temps restant par rapport au temps total
    // Ex: si tempsRestant = 150 et totalSeconds = 300, ratio = 0.5 (50%)
    const remainingRatio = tempsRestant / totalSeconds;
    
    // Applique une rotation à l'aiguille des heures (représente le temps global)
    // (1 - remainingRatio) inverse le ratio car le temps diminue
    // Si ratio = 0.5 (50% restant), alors (1 - 0.5) = 0.5, donc 180° de rotation
    // Cela crée un effet visuel de compte à rebours
    hourEl.style.transform = `translate(-50%, -100%) rotate(${(1 - remainingRatio) * 360}deg)`;
    
    // Applique une rotation à l'aiguille des minutes
    // (minutes / 5) car le minuteur va de 0 à 5 minutes maximum
    // Multiplié par 360° pour obtenir l'angle de rotation
    minuteEl.style.transform = `translate(-50%, -100%) rotate(${(minutes / 5) * 360}deg)`;
    
    // Applique une rotation à l'aiguille des secondes
    // (seconds / 60) * 360 convertit les secondes (0-59) en degrés (0-360)
    secondEl.style.transform = `translate(-50%, -100%) rotate(${(seconds / 60) * 360}deg)`;
}

// ============================================
// FONCTION: demarrerMinuteur
// ============================================
// Démarre le compte à rebours du minuteur
function demarrerMinuteur() {
    // Si un intervalle existe déjà (minuteur déjà en marche), on sort de la fonction
    // Cela évite de créer plusieurs intervalles en même temps
    if (intervalId !== null) return; // Évite les doublons
    
    // setInterval exécute une fonction toutes les X millisecondes (ici 1000ms = 1 seconde)
    intervalId = setInterval(function() {
        // Décrémente (diminue de 1) le temps restant à chaque seconde
        tempsRestant--;
        
        // Met à jour l'affichage numérique du temps
        afficherTemps(tempsRestant);
        
        // Met à jour les aiguilles de l'horloge
        updateClockNeedles();
        
        // Si le temps restant est égal ou inférieur à zéro
        if (tempsRestant <= 0) {
            // Arrête le minuteur
            arreterMinuteur();
            // Lance le son d'alerte
            triggerBirdAlert("Temps écoulé !");
        }
    }, 1000); // Exécute toutes les 1000 millisecondes (1 seconde)
}

// ============================================
// FONCTION: pauseMinuteur
// ============================================
// Met en pause le minuteur (sans le réinitialiser)
function pauseMinuteur() {
    // clearInterval arrête l'exécution répétée de setInterval
    clearInterval(intervalId);
    
    // Réinitialise l'identifiant d'intervalle à null
    intervalId = null;
}

// ============================================
// FONCTION: arreterMinuteur
// ============================================
// Arrête le minuteur (identique à pauseMinuteur dans ce code)
function arreterMinuteur() {
    // clearInterval arrête l'exécution répétée de setInterval
    clearInterval(intervalId);
    
    // Réinitialise l'identifiant d'intervalle à null
    intervalId = null;
}

// ============================================
// FONCTION: resetMinuteur
// ============================================
// Réinitialise complètement le minuteur à 5 minutes
function resetMinuteur() {
    // Arrête le minuteur s'il est en marche
    clearInterval(intervalId);
    
    // Réinitialise l'identifiant d'intervalle à null
    intervalId = null;
    
    // Réinitialise le temps restant à 300 secondes (5 minutes)
    tempsRestant = 300;
    
    // Met à jour l'affichage avec le nouveau temps
    afficherTemps(tempsRestant);
    
    // Remet les aiguilles à leur position initiale
    updateClockNeedles();
}

// ============================================
// FONCTION: setDuree
// ============================================
// Permet à l'utilisateur de définir une durée personnalisée pour le minuteur
function setDuree() {
    // Vérifie si le minuteur est en marche
    if (intervalId !== null) {
        // Si oui, affiche un message d'erreur et quitte la fonction
        alert("Arrêtez le minuteur avant de changer la durée !");
        return;
    }
    
    // Récupère la valeur du champ input pour les minutes
    // parseInt() convertit une chaîne de caractères en nombre entier
    // || 0 signifie "ou 0" : si la valeur est vide/invalide, on utilise 0
    const minutes = parseInt(document.getElementById("minutesInput").value) || 0;
    
    // Récupère la valeur du champ input pour les secondes
    const secondes = parseInt(document.getElementById("secondesInput").value) || 0;
    
    // Calcule le temps total en secondes (minutes * 60) + secondes
    // Ex: 2 minutes et 30 secondes = (2 * 60) + 30 = 150 secondes
    tempsRestant = (minutes * 60) + secondes;
    
    // Vérifie si la durée entrée est valide (doit être > 0)
    if (tempsRestant <= 0) {
        // Si la durée est invalide, affiche un message d'erreur
        alert("Veuillez entrer une durée valide !");
        // Réinitialise à la valeur par défaut (5 minutes)
        tempsRestant = 300;
        // Quitte la fonction
        return;
    }
    
    // Met à jour l'affichage avec la nouvelle durée
    afficherTemps(tempsRestant);
    
    // Met à jour les aiguilles pour refléter la nouvelle durée
    updateClockNeedles();
}

// ============================================
// FONCTION: afficherTemps
// ============================================
// Affiche le temps formaté dans l'élément HTML
// Paramètres: secondes - le nombre total de secondes à afficher
function afficherTemps(secondes) {
    // Calcule le nombre de minutes (division entière par 60)
    // Math.floor arrondit à l'entier inférieur
    const minutes = Math.floor(secondes / 60);
    
    // Calcule les secondes restantes (reste de la division par 60)
    const secs = secondes % 60;
    
    // Crée la chaîne d'affichage au format MM:SS
    // Utilise formatNumber pour ajouter les zéros devant les nombres < 10
    const affichage = formatNumber(minutes) + ":" + formatNumber(secs);
    
    // Modifie le contenu texte de l'élément avec l'id "affichageMinuteur"
    // textContent modifie uniquement le texte (pas le HTML)
    document.getElementById("affichageMinuteur").textContent = affichage;
}

// ============================================
// INITIALISATION AU CHARGEMENT DE LA PAGE
// ============================================
// addEventListener attend qu'un événement se produise
// 'DOMContentLoaded' est déclenché quand le HTML est complètement chargé et analysé
document.addEventListener('DOMContentLoaded', function() {
    // Affiche le temps initial (5:00) au chargement de la page
    afficherTemps(tempsRestant);
    
    // Initialise les aiguilles à leur position de départ
    updateClockNeedles();
});

function triggerBirdAlert(message) {
    const sound = document.getElementById('coucou-sound');

    if (sound) {
        sound.pause();
        sound.currentTime = 0;
       
        let repetitions = 0;

        // fonction pour jouer le son qui se répète
        const playCoucou = () => {
            if (repetitions < 2) {
                // Ici j’ai demandé à l’IA comment faire car le son n’était pas fluide avec la répétition car le temps de chargement est plus long que l’affichage : On clone le nœud audio pour éviter que les sons se chevauchent ou se coupent
                // C'est l'astuce ultime pour un son fluide !
                const soundClone = sound.cloneNode();
                soundClone.play().catch(e => console.log("Erreur lecture"));
                repetitions++;
            } else {
                clearInterval(intervalSon);
            }
        };

        // On lance le premier cri
        playCoucou();

        // On lance l'intervalle pour les suivants
        const intervalSon = setInterval(playCoucou, 1200);
    }
}
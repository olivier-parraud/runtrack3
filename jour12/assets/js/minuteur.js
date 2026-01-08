let tempsRestant = 300; // 5 minutes en secondes
let intervalId = null;

// Ajoutez cette fonction
function formatNumber(num) {
    return num < 10 ? '0' + num : num;
}



// Animation des aiguilles
function updateClockNeedles() {
    const hourEl = document.querySelector('.hour');
    const minuteEl = document.querySelector('.minute');
    const secondEl = document.querySelector('.second');
    
    if (!hourEl || !minuteEl || !secondEl) return;
    
    const minutes = Math.floor(tempsRestant / 60);
    const seconds = tempsRestant % 60;
    
    // Animation pour le minuteur (countdown)
    const totalSeconds = 300; // 5 minutes
    const remainingRatio = tempsRestant / totalSeconds;
    
    hourEl.style.transform = `translate(-50%, -100%) rotate(${(1 - remainingRatio) * 360}deg)`;
    minuteEl.style.transform = `translate(-50%, -100%) rotate(${(minutes / 5) * 360}deg)`;
    secondEl.style.transform = `translate(-50%, -100%) rotate(${(seconds / 60) * 360}deg)`;
}

function demarrerMinuteur() {
    if (intervalId !== null) return; // Évite les doublons
    
    intervalId = setInterval(function() {
        tempsRestant--;
        afficherTemps(tempsRestant);
        updateClockNeedles();
        if (tempsRestant <= 0) {
            arreterMinuteur();
            alert("Temps écoulé !");
        }
    }, 1000);
}

function pauseMinuteur() {
    clearInterval(intervalId);
    intervalId = null;
}

function arreterMinuteur() {
    clearInterval(intervalId);
    intervalId = null;
}

function resetMinuteur() {
    clearInterval(intervalId);
    intervalId = null;
    tempsRestant = 300; // Réinitialise à 5 minutes
    afficherTemps(tempsRestant);
    updateClockNeedles();
}

function setDuree() {
    if (intervalId !== null) {
        alert("Arrêtez le minuteur avant de changer la durée !");
        return;
    }
    
    const minutes = parseInt(document.getElementById("minutesInput").value) || 0;
    const secondes = parseInt(document.getElementById("secondesInput").value) || 0;
    
    tempsRestant = (minutes * 60) + secondes;
    
    if (tempsRestant <= 0) {
        alert("Veuillez entrer une durée valide !");
        tempsRestant = 300;
        return;
    }
    
    afficherTemps(tempsRestant);
    updateClockNeedles();
}

function afficherTemps(secondes) {
    const minutes = Math.floor(secondes / 60);
    const secs = secondes % 60;
    const affichage = formatNumber(minutes) + ":" + formatNumber(secs);
    document.getElementById("affichageMinuteur").textContent = affichage;
}

// Initialisez au chargement
document.addEventListener('DOMContentLoaded', function() {
    afficherTemps(tempsRestant); // Affiche le temps initial
    updateClockNeedles(); // Initialise les aiguilles
});
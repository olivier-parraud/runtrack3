let tempsEcoule = 0;
let intervalId = null;
let enMarche = false;
let tours = [];

function formatNumber(num) {
    return num < 10 ? '0' + num : num;
}

// Animation des aiguilles
function updateClockNeedles() {
    const hourEl = document.querySelector('.hour');
    const minuteEl = document.querySelector('.minute');
    const secondEl = document.querySelector('.second');
    
    if (!hourEl || !minuteEl || !secondEl) return;
    
    const heures = Math.floor(tempsEcoule / 3600);
    const minutes = Math.floor((tempsEcoule % 3600) / 60);
    const secondes = tempsEcoule % 60;
    
    // Animation pour le chronomètre
    hourEl.style.transform = `translate(-50%, -100%) rotate(${(heures % 12 / 12) * 360}deg)`;
    minuteEl.style.transform = `translate(-50%, -100%) rotate(${(minutes / 60) * 360}deg)`;
    secondEl.style.transform = `translate(-50%, -100%) rotate(${(secondes / 60) * 360}deg)`;
}

function toggleChrono() {
    if (enMarche) {
        arreter();
    } else {
        demarrer();
    }
}

function demarrer() {
    enMarche = true;
    intervalId = setInterval(function() {
        tempsEcoule++;
        afficherTemps(tempsEcoule);
        updateClockNeedles();
    }, 1000);
    // Changer l'icône du bouton
    document.getElementById("btnToggle").innerHTML = '<i class="fa-solid fa-pause"></i>';
}

function arreter() {
    enMarche = false;
    clearInterval(intervalId);
    intervalId = null;
    document.getElementById("btnToggle").innerHTML = '<i class="fa-solid fa-play"></i>';
}

function resetChrono() {
    arreter();
    tempsEcoule = 0;
    tours = [];
    afficherTemps(0);
    updateClockNeedles();
    document.getElementById("listeTours").innerHTML = "";
}

function afficherTemps(secondes) {
    const heures = Math.floor(secondes / 3600);
    const minutes = Math.floor((secondes % 3600) / 60);
    const secs = secondes % 60;
    const affichage = formatNumber(heures) + ":" + formatNumber(minutes) + ":" + formatNumber(secs);
    document.getElementById("affichageChrono").textContent = affichage;
}

function enregistrerTour() {
    if (tempsEcoule === 0) return;
    tours.push(tempsEcoule);
    afficherTours();
}

function afficherTours() {
    const listeTours = document.getElementById("listeTours");
    listeTours.innerHTML = "";
    tours.forEach(function(temps, index) {
        const li = document.createElement("li");
        const heures = Math.floor(temps / 3600);
        const minutes = Math.floor((temps % 3600) / 60);
        const secs = temps % 60;
        li.textContent = "Tour " + (index + 1) + ": " + formatNumber(heures) + ":" + formatNumber(minutes) + ":" + formatNumber(secs);
        listeTours.appendChild(li);
    });
}

// Initialisation
document.addEventListener('DOMContentLoaded', function() {
    afficherTemps(0);
    updateClockNeedles();
});
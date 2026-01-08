let reveilActif = false;
let heureReveil = 7;
let minuteReveil = 0;
let intervalId = null;

// Animation des aiguilles pour l'heure actuelle
function updateClockNeedles() {
    const hourEl = document.querySelector('.hour');
    const minuteEl = document.querySelector('.minute');
    const secondEl = document.querySelector('.second');
    
    if (!hourEl || !minuteEl || !secondEl) return;
    
    const maintenant = new Date();
    const heures = maintenant.getHours() % 12;
    const minutes = maintenant.getMinutes();
    const secondes = maintenant.getSeconds();
    
    hourEl.style.transform = `translate(-50%, -100%) rotate(${(heures / 12) * 360 + (minutes / 60) * 30}deg)`;
    minuteEl.style.transform = `translate(-50%, -100%) rotate(${(minutes / 60) * 360}deg)`;
    secondEl.style.transform = `translate(-50%, -100%) rotate(${(secondes / 60) * 360}deg)`;
}

function afficherHeureActuelle() {
    const maintenant = new Date();
    const heures = maintenant.getHours();
    const minutes = maintenant.getMinutes();
    const affichage = formatNumber(heures) + ":" + formatNumber(minutes);
    document.getElementById("affichageHeure").textContent = affichage;
}

function formatNumber(num) {
    return num < 10 ? '0' + num : num;
}

function toggleReveil() {
    if (reveilActif) {
        desactiverReveil();
    } else {
        activerReveil();
    }
}

function activerReveil() {
    heureReveil = parseInt(document.getElementById("heureReveil").value);
    minuteReveil = parseInt(document.getElementById("minuteReveil").value);
    
    reveilActif = true;
    document.getElementById("btnToggleReveil").innerHTML = '<i class="fa-solid fa-bell-slash"></i> Désactiver';
    document.getElementById("messageReveil").textContent = "Réveil programmé pour " + formatNumber(heureReveil) + ":" + formatNumber(minuteReveil);
    document.getElementById("messageReveil").style.color = "#4caf50";
    
    // Vérifier toutes les secondes
    if (intervalId === null) {
        intervalId = setInterval(verifierReveil, 1000);
    }
}

function desactiverReveil() {
    reveilActif = false;
    document.getElementById("btnToggleReveil").innerHTML = '<i class="fa-solid fa-bell"></i> Activer';
    document.getElementById("messageReveil").textContent = "";
}

function verifierReveil() {
    if (!reveilActif) return;
    
    const maintenant = new Date();
    const heureActuelle = maintenant.getHours();
    const minuteActuelle = maintenant.getMinutes();
    
    if (heureActuelle === heureReveil && minuteActuelle === minuteReveil) {
        sonnerReveil();
    }
}

function sonnerReveil() {
    alert("⏰ RÉVEIL ! Il est " + formatNumber(heureReveil) + ":" + formatNumber(minuteReveil));
    desactiverReveil();
}

// Mise à jour continue de l'horloge
function mettreAJour() {
    afficherHeureActuelle();
    updateClockNeedles();
}

// Initialisation
document.addEventListener('DOMContentLoaded', function() {
    afficherHeureActuelle();
    updateClockNeedles();
    setInterval(mettreAJour, 1000);
    
    // Ajouter l'event listener pour le bouton
    document.getElementById('btnToggleReveil').addEventListener('click', toggleReveil);
});

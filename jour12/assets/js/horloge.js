// ============================================
// SÉLECTION DES ÉLÉMENTS HTML
// ============================================

// Sélectionne l'élément HTML avec la classe "hour" (aiguille des heures)
// querySelector retourne le premier élément qui correspond au sélecteur CSS
const hourEl = document.querySelector('.hour');

// Sélectionne l'élément HTML avec la classe "minute" (aiguille des minutes)
const minuteEl = document.querySelector('.minute');

// Sélectionne l'élément HTML avec la classe "second" (aiguille des secondes)
const secondEl = document.querySelector('.second');

// Sélectionne l'élément où afficher l'heure en format numérique (ex: 3:45 PM)
const timeEl = document.querySelector('.time');

// Sélectionne l'élément où afficher la date (ex: Lundi, Jan 8)
const dateEl = document.querySelector('.date');

// ============================================
// CONSTANTES POUR LES JOURS ET MOIS
// ============================================

// Tableau contenant les noms des jours de la semaine en français
// Index 0 = Dimanche, 1 = Lundi, ..., 6 = Samedi
const days = ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"];

// Tableau contenant les abréviations des mois en français
// Index 0 = Janvier, 1 = Février, ..., 11 = Décembre
const months = ["Jan", "Fév", "Mar", "Avr", "Mai", "Juin", "Juil", "Août", "Sep", "Oct", "Nov", "Déc"];

// ============================================
// FONCTION: afficherHorloge
// ============================================
// Fonction principale qui met à jour l'horloge (aiguilles et affichages texte)
function afficherHorloge() {
    // Crée un nouvel objet Date qui contient la date et l'heure actuelles
    const time = new Date();
    
    // Récupère le mois actuel (0-11, où 0 = janvier, 11 = décembre)
    const month = time.getMonth();
    
    // Récupère le jour de la semaine (0-6, où 0 = dimanche, 6 = samedi)
    const day = time.getDay();
    
    // Récupère le numéro du jour dans le mois (1-31)
    const date = time.getDate();
    
    // Récupère l'heure actuelle (0-23, format 24h)
    const hours = time.getHours();
    
    // Convertit l'heure en format 12h (0-11)
    // % 12 donne le reste de la division par 12
    // Ex: 13 % 12 = 1, 15 % 12 = 3
    const hoursForClock = hours % 12;
    
    // Récupère les minutes actuelles (0-59)
    const minutes = time.getMinutes();
    
    // Récupère les secondes actuelles (0-59)
    const seconds = time.getSeconds();

    // ============================================
    // MISE À JOUR DES AIGUILLES DE L'HORLOGE
    // ============================================
    
    // Met à jour la rotation de l'aiguille des heures
    // translate(-50%, -100%) centre l'aiguille sur son pivot
    // scale() convertit les heures (0-11) en degrés de rotation (0-360)
    hourEl.style.transform = `translate(-50%, -100%) rotate(${scale(hoursForClock, 0, 11, 0, 360)}deg)`;
    
    // Met à jour la rotation de l'aiguille des minutes
    // scale() convertit les minutes (0-59) en degrés de rotation (0-360)
    minuteEl.style.transform = `translate(-50%, -100%) rotate(${scale(minutes, 0, 59, 0, 360)}deg)`;
    
    // Met à jour la rotation de l'aiguille des secondes
    // scale() convertit les secondes (0-59) en degrés de rotation (0-360)
    secondEl.style.transform = `translate(-50%, -100%) rotate(${scale(seconds, 0, 59, 0, 360)}deg)`;

    // ============================================
    // MISE À JOUR DE L'AFFICHAGE NUMÉRIQUE
    // ============================================
    
    // Affiche l'heure en format texte (ex: "3:45 PM")
    // ${expression} est un template literal qui permet d'insérer des variables dans une chaîne
    // hoursForClock === 0 ? 12 : hoursForClock convertit 0 en 12 pour afficher minuit comme "12:00"
    // minutes < 10 ? `0${minutes}` : minutes ajoute un zéro devant les minutes < 10 (ex: 3:05)
    // hours >= 12 ? 'PM' : 'AM' affiche PM pour l'après-midi, AM pour le matin
    timeEl.textContent = `${hoursForClock === 0 ? 12 : hoursForClock}:${minutes < 10 ? `0${minutes}` : minutes} ${hours >= 12 ? 'PM' : 'AM'}`;
    
    // Affiche la date complète (ex: "Lundi, Jan 8")
    // days[day] récupère le nom du jour depuis le tableau days
    // months[month] récupère l'abréviation du mois depuis le tableau months
    // <span class="circle">${date}</span> entoure le numéro du jour dans une balise span avec la classe "circle"
    // innerHTML permet d'insérer du HTML (pas juste du texte)
    dateEl.innerHTML = `${days[day]}, ${months[month]} <span class="circle">${date}</span>`;
}

// ============================================
// FONCTION: scale
// ============================================
// Fonction mathématique qui convertit une valeur d'une plage à une autre
// Paramètres:
//   - num: la valeur à convertir
//   - in_min: valeur minimale de la plage d'entrée
//   - in_max: valeur maximale de la plage d'entrée
//   - out_min: valeur minimale de la plage de sortie
//   - out_max: valeur maximale de la plage de sortie
// Exemple: scale(30, 0, 59, 0, 360) convertit 30 minutes en 180 degrés
function scale(num, in_min, in_max, out_min, out_max) {
    // Formule de mise à l'échelle linéaire:
    // 1. (num - in_min) normalise la valeur par rapport au minimum
    // 2. (out_max - out_min) calcule la plage de sortie
    // 3. (in_max - in_min) calcule la plage d'entrée
    // 4. On divise pour obtenir le ratio, puis on multiplie par la plage de sortie
    // 5. + out_min ajuste par rapport au minimum de sortie
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}

// ============================================
// INITIALISATION ET MISE À JOUR AUTOMATIQUE
// ============================================

// Appelle afficherHorloge() immédiatement au chargement de la page
// Sans cela, il faudrait attendre 1 seconde avant le premier affichage
afficherHorloge();

// setInterval() appelle afficherHorloge() toutes les 1000 millisecondes (1 seconde)
// Cela crée une mise à jour continue de l'horloge
setInterval(afficherHorloge, 1000);
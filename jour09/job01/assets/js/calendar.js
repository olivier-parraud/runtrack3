// Récupération de l'utilisateur connecté
const user = JSON.parse(sessionStorage.getItem("currentUser"));

// Initialisation du calendrier
let calendar;
let eventModal;
let eventDetailModal;
let selectedInfo = null;
let currentEvent = null;

document.addEventListener('DOMContentLoaded', function() {
    // Protection d'une page - vérifier après le chargement du DOM
    if (!user) {
        window.location.href = "index.html";
        return;
    }

    // Afficher les informations de l'utilisateur dans la navbar
    const userInfo = document.getElementById('userInfo');
    const loginBtn = document.getElementById('loginBtn');
    const logoutBtn = document.getElementById('logoutBtn');
    
    if (user) {
        userInfo.textContent = `Bienvenue, ${user.prenom || user.email}`;
        loginBtn.style.display = 'none';
        logoutBtn.style.display = 'inline-block';
    }

    // Gérer la déconnexion
    logoutBtn.addEventListener('click', function() {
        if (confirm('Voulez-vous vraiment vous déconnecter ?')) {
            sessionStorage.removeItem('currentUser');
            window.location.href = 'index.html';
        }
    });
    const calendarEl = document.getElementById('calendar');
    
    // Initialisation des modals Bootstrap
    eventModal = new bootstrap.Modal(document.getElementById('eventModal'));
    eventDetailModal = new bootstrap.Modal(document.getElementById('eventDetailModal'));
    
    // Configuration du calendrier
    calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'dayGridMonth',
        selectable: true,
        locale: 'fr',
        headerToolbar: {
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth,timeGridWeek,timeGridDay'
        },
        // Quand l'utilisateur sélectionne une plage de dates
        select: function(info) {
            selectedInfo = info;
            
            // Pré-remplir les dates dans le formulaire
            const startDate = info.start.toISOString().split('T')[0];
            const endDate = new Date(info.end.getTime() - 1).toISOString().split('T')[0];
            
            document.getElementById('eventStartDate').value = startDate;
            document.getElementById('eventEndDate').value = endDate;
            document.getElementById('eventStartTime').value = '09:00';
            document.getElementById('eventEndTime').value = '10:00';
            document.getElementById('eventTitle').value = '';
            
            // Ouvrir le modal
            eventModal.show();
        },
        // Quand on clique sur un événement existant
        eventClick: function(info) {
            currentEvent = info.event;
            
            // Remplir les détails dans le modal
            document.getElementById('detailTitle').textContent = info.event.title;
            
            const startDate = info.event.start;
            const endDate = info.event.end || info.event.start;
            
            // Formater les dates
            const optionsDate = { year: 'numeric', month: 'long', day: 'numeric' };
            const optionsTime = { hour: '2-digit', minute: '2-digit' };
            
            document.getElementById('detailStartDate').textContent = startDate.toLocaleDateString('fr-FR', optionsDate);
            document.getElementById('detailStartTime').textContent = startDate.toLocaleTimeString('fr-FR', optionsTime);
            document.getElementById('detailEndDate').textContent = endDate.toLocaleDateString('fr-FR', optionsDate);
            document.getElementById('detailEndTime').textContent = endDate.toLocaleTimeString('fr-FR', optionsTime);
            
            // Ouvrir le modal
            eventDetailModal.show();
        },
        editable: true,
        eventDrop: function(info) {
            saveEventsToStorage();
        },
        eventResize: function(info) {
            saveEventsToStorage();
        }
    });
    
    calendar.render();
    
    // Charger les événements depuis le localStorage
    loadEventsFromStorage();
    
    // Gestion de la sauvegarde de l'événement
    document.getElementById('saveEvent').addEventListener('click', function() {
        const title = document.getElementById('eventTitle').value;
        const startDate = document.getElementById('eventStartDate').value;
        const startTime = document.getElementById('eventStartTime').value;
        const endDate = document.getElementById('eventEndDate').value;
        const endTime = document.getElementById('eventEndTime').value;
        
        if(title && startDate && startTime && endDate && endTime) {
            // Créer l'événement
            const event = {
                title: title,
                start: `${startDate}T${startTime}`,
                end: `${endDate}T${endTime}`,
                allDay: false
            };
            
            // Ajouter au calendrier
            calendar.addEvent(event);
            
            // Sauvegarder dans localStorage
            saveEventsToStorage();
            
            // Fermer le modal
            eventModal.hide();
            
            // Réinitialiser le formulaire
            document.getElementById('eventForm').reset();
            
            // Désélectionner dans le calendrier
            if(selectedInfo) {
                calendar.unselect();
            }
        } else {
            alert('Veuillez remplir tous les champs');
        }
    });
    
    // Gestion de la suppression de l'événement depuis le modal de détails
    document.getElementById('deleteEvent').addEventListener('click', function() {
        if(currentEvent && confirm('Voulez-vous vraiment supprimer cet événement ?')) {
            currentEvent.remove();
            saveEventsToStorage();
            eventDetailModal.hide();
            currentEvent = null;
        }
    });
});

// Fonction pour sauvegarder les événements dans le localStorage
function saveEventsToStorage() {
    const events = calendar.getEvents().map(event => ({
        title: event.title,
        start: event.start.toISOString(),
        end: event.end ? event.end.toISOString() : null,
        allDay: event.allDay
    }));
    
    localStorage.setItem(`calendar_events_${user.email}`, JSON.stringify(events));
}

// Fonction pour charger les événements depuis le localStorage
function loadEventsFromStorage() {
    const storedEvents = localStorage.getItem(`calendar_events_${user.email}`);
    
    if(storedEvents) {
        const events = JSON.parse(storedEvents);
        events.forEach(event => {
            calendar.addEvent(event);
        });
    }
}
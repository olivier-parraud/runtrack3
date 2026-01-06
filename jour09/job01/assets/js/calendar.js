// Récupération de l'utilisateur connecté
const user = JSON.parse(sessionStorage.getItem("currentUser"));
// Protection d'une page
if (!user) {
    window.location.href = "login.html";
}

// Initialisation du calendrier
let calendar;
let eventModal;
let selectedInfo = null;

document.addEventListener('DOMContentLoaded', function() {
    const calendarEl = document.getElementById('calendar');
    
    // Initialisation du modal Bootstrap
    eventModal = new bootstrap.Modal(document.getElementById('eventModal'));
    
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
            if(confirm('Voulez-vous supprimer cet événement ?')) {
                info.event.remove();
                saveEventsToStorage();
            }
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
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
    const adminBtn = document.getElementById('adminBtn');
    
    if (user) {
        userInfo.textContent = `Bienvenue, ${user.prenom || user.email}`;
        loginBtn.style.display = 'none';
        logoutBtn.style.display = 'inline-block';
        
        // Afficher le bouton admin seulement si l'utilisateur est admin
        if (user.role === 'admin' && adminBtn) {
            adminBtn.style.display = 'inline-block';
        }
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
            // Créer l'événement avec statut pending pour les users normaux
            const event = {
                title: title,
                start: `${startDate}T${startTime}`,
                end: `${endDate}T${endTime}`,
                allDay: false,
                status: 'pending', // En attente d'approbation
                proposedBy: user.email,
                proposedByName: user.prenom || user.email
            };
            
            // Sauvegarder la proposition
            savePendingEvent(event);
            
            // Fermer le modal
            eventModal.hide();
            
            // Réinitialiser le formulaire
            document.getElementById('eventForm').reset();
            
            // Désélectionner dans le calendrier
            if(selectedInfo) {
                calendar.unselect();
            }
            
            // Informer l'utilisateur
            alert('Votre proposition de rendez-vous a été envoyée à l\'administrateur pour validation.');
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
    // Cette fonction met à jour les événements dans admin_events après un drag/drop
    const calendarEvents = calendar.getEvents();
    const adminEvents = JSON.parse(localStorage.getItem('admin_events') || '[]');
    
    // Mettre à jour les dates des événements qui ont été déplacés
    calendarEvents.forEach(calEvent => {
        const existingEvent = adminEvents.find(e => e.id === calEvent.id);
        if(existingEvent) {
            existingEvent.start = calEvent.start.toISOString();
            existingEvent.end = calEvent.end ? calEvent.end.toISOString() : calEvent.start.toISOString();
        }
    });
    
    localStorage.setItem('admin_events', JSON.stringify(adminEvents));
}

// Fonction pour charger les événements depuis le localStorage
function loadEventsFromStorage() {
    // Charger les événements approuvés (visibles par tous)
    const approvedEvents = localStorage.getItem('admin_events');
    
    if(approvedEvents) {
        const events = JSON.parse(approvedEvents);
        events.forEach(event => {
            // Charger uniquement les événements avec statut approved
            if(event.status === 'approved' || !event.status) {
                calendar.addEvent({
                    id: event.id,
                    title: event.title,
                    start: event.start,
                    end: event.end,
                    backgroundColor: event.color || '#0d6efd',
                    borderColor: event.color || '#0d6efd',
                    allDay: event.allDay || false
                });
            }
        });
    }
}

// Fonction pour sauvegarder une proposition d'événement
function savePendingEvent(event) {
    // Récupérer les propositions existantes
    let pendingEvents = JSON.parse(localStorage.getItem('pending_events') || '[]');
    
    // Ajouter un ID unique
    event.id = Date.now().toString(36) + Math.random().toString(36).substr(2);
    event.createdAt = new Date().toISOString();
    
    // Ajouter la nouvelle proposition
    pendingEvents.push(event);
    
    // Sauvegarder
    localStorage.setItem('pending_events', JSON.stringify(pendingEvents));
}
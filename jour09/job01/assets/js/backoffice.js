
// Récupération de l'utilisateur connecté
const user = JSON.parse(sessionStorage.getItem("currentUser"));

// Protection de la page admin
if (!user) {
    window.location.href = "index.html";
}

// Vérifier si l'utilisateur est admin
if (user.role !== "admin") {
    alert("Accès refusé : cette page est réservée aux administrateurs.");
    window.location.href = "calendar.html";
}

// Variables globales
let calendar;
let eventModal;
let deleteModal;
let events = [];
let currentEventId = null;
let filteredEvents = [];

// Initialisation au chargement de la page
document.addEventListener('DOMContentLoaded', function() {
    // Afficher les informations de l'utilisateur
    const userInfo = document.getElementById('userInfo');
    userInfo.innerHTML = `<i class="bi bi-person-circle me-2"></i>Admin: ${user.prenom || user.email}`;

    // Initialiser les modals
    eventModal = new bootstrap.Modal(document.getElementById('eventModal'));
    deleteModal = new bootstrap.Modal(document.getElementById('deleteModal'));

    // Charger les événements
    loadEvents();

    // Initialiser le calendrier
    initializeCalendar();

    // Événements des boutons
    setupEventListeners();

    // Afficher les événements
    displayEvents();
    updateStatistics();
});

// Initialiser le calendrier FullCalendar
function initializeCalendar() {
    const calendarEl = document.getElementById('calendar');
    
    calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'dayGridMonth',
        locale: 'fr',
        headerToolbar: {
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
        },
        buttonText: {
            today: "Aujourd'hui",
            month: 'Mois',
            week: 'Semaine',
            day: 'Jour',
            list: 'Liste'
        },
        editable: true,
        droppable: true,
        eventClick: function(info) {
            openEditModal(info.event.id);
        },
        eventDrop: function(info) {
            // Mettre à jour l'événement quand il est déplacé
            updateEventDates(info.event.id, info.event.start, info.event.end);
        },
        eventResize: function(info) {
            // Mettre à jour l'événement quand il est redimensionné
            updateEventDates(info.event.id, info.event.start, info.event.end);
        },
        events: []
    });
    
    calendar.render();
    loadEventsToCalendar();
}

// Charger les événements depuis localStorage
function loadEvents() {
    const storedEvents = localStorage.getItem('admin_events');
    if (storedEvents) {
        events = JSON.parse(storedEvents);
    } else {
        // Créer quelques événements d'exemple
        events = [
            {
                id: generateId(),
                title: "Réunion d'équipe",
                start: new Date(Date.now() + 86400000).toISOString(),
                end: new Date(Date.now() + 86400000 + 3600000).toISOString(),
                description: "Réunion hebdomadaire de l'équipe",
                color: "#0d6efd"
            },
            {
                id: generateId(),
                title: "Formation JavaScript",
                start: new Date(Date.now() + 172800000).toISOString(),
                end: new Date(Date.now() + 172800000 + 7200000).toISOString(),
                description: "Session de formation",
                color: "#198754"
            }
        ];
        saveEvents();
    }
    filteredEvents = [...events];
}

// Sauvegarder les événements dans localStorage
function saveEvents() {
    localStorage.setItem('admin_events', JSON.stringify(events));
}

// Charger les événements dans le calendrier
function loadEventsToCalendar() {
    if (calendar) {
        calendar.removeAllEvents();
        events.forEach(event => {
            calendar.addEvent({
                id: event.id,
                title: event.title,
                start: event.start,
                end: event.end,
                backgroundColor: event.color || "#0d6efd",
                borderColor: event.color || "#0d6efd"
            });
        });
    }
}

// Afficher les événements dans la vue liste
function displayEvents() {
    const eventsList = document.getElementById('eventsList');
    const noEvents = document.getElementById('noEvents');
    
    eventsList.innerHTML = '';
    
    if (filteredEvents.length === 0) {
        noEvents.style.display = 'block';
        return;
    }
    
    noEvents.style.display = 'none';
    
    filteredEvents.forEach(event => {
        const startDate = new Date(event.start);
        const endDate = new Date(event.end);
        
        const eventCard = document.createElement('div');
        eventCard.className = 'col-md-6 mb-3';
        eventCard.innerHTML = `
            <div class="card event-card h-100">
                <div class="card-body">
                    <div class="d-flex justify-content-between align-items-start mb-2">
                        <h5 class="card-title mb-0">${event.title}</h5>
                        <span class="badge badge-custom" style="background-color: ${event.color || '#0d6efd'}">
                            ${formatDate(startDate)}
                        </span>
                    </div>
                    ${event.description ? `<p class="card-text text-muted small mb-2">${event.description}</p>` : ''}
                    <div class="d-flex justify-content-between align-items-center">
                        <div class="text-muted small">
                            <i class="bi bi-clock me-1"></i>
                            ${formatTime(startDate)} - ${formatTime(endDate)}
                        </div>
                        <div class="btn-group btn-group-sm">
                            <button class="btn btn-outline-primary" onclick="openEditModal('${event.id}')">
                                <i class="bi bi-pencil"></i>
                            </button>
                            <button class="btn btn-outline-danger" onclick="openDeleteModal('${event.id}')">
                                <i class="bi bi-trash"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        `;
        eventsList.appendChild(eventCard);
    });
}

// Ouvrir le modal pour ajouter un événement
function openAddModal() {
    document.getElementById('eventModalLabel').innerHTML = '<i class="bi bi-calendar-plus me-2"></i>Ajouter un événement';
    document.getElementById('eventForm').reset();
    document.getElementById('eventId').value = '';
    
    // Définir les dates par défaut
    const now = new Date();
    const tomorrow = new Date(now.getTime() + 86400000);
    
    document.getElementById('eventStartDate').value = formatDateInput(now);
    document.getElementById('eventEndDate').value = formatDateInput(tomorrow);
    document.getElementById('eventStartTime').value = '09:00';
    document.getElementById('eventEndTime').value = '10:00';
    document.getElementById('eventColor').value = '#0d6efd';
    
    eventModal.show();
}

// Ouvrir le modal pour modifier un événement
function openEditModal(eventId) {
    const event = events.find(e => e.id === eventId);
    if (!event) return;
    
    document.getElementById('eventModalLabel').innerHTML = '<i class="bi bi-pencil me-2"></i>Modifier l\'événement';
    document.getElementById('eventId').value = event.id;
    document.getElementById('eventTitle').value = event.title;
    
    const startDate = new Date(event.start);
    const endDate = new Date(event.end);
    
    document.getElementById('eventStartDate').value = formatDateInput(startDate);
    document.getElementById('eventStartTime').value = formatTimeInput(startDate);
    document.getElementById('eventEndDate').value = formatDateInput(endDate);
    document.getElementById('eventEndTime').value = formatTimeInput(endDate);
    document.getElementById('eventDescription').value = event.description || '';
    document.getElementById('eventColor').value = event.color || '#0d6efd';
    
    eventModal.show();
}

// Ouvrir le modal de confirmation de suppression
function openDeleteModal(eventId) {
    const event = events.find(e => e.id === eventId);
    if (!event) return;
    
    currentEventId = eventId;
    document.getElementById('deleteEventTitle').textContent = event.title;
    deleteModal.show();
}

// Sauvegarder l'événement (ajout ou modification)
function saveEvent() {
    const eventId = document.getElementById('eventId').value;
    const title = document.getElementById('eventTitle').value.trim();
    const startDate = document.getElementById('eventStartDate').value;
    const startTime = document.getElementById('eventStartTime').value;
    const endDate = document.getElementById('eventEndDate').value;
    const endTime = document.getElementById('eventEndTime').value;
    const description = document.getElementById('eventDescription').value.trim();
    const color = document.getElementById('eventColor').value;
    
    if (!title || !startDate || !startTime || !endDate || !endTime) {
        alert('Veuillez remplir tous les champs obligatoires');
        return;
    }
    
    const start = new Date(`${startDate}T${startTime}`);
    const end = new Date(`${endDate}T${endTime}`);
    
    if (end <= start) {
        alert('La date de fin doit être après la date de début');
        return;
    }
    
    const eventData = {
        title,
        start: start.toISOString(),
        end: end.toISOString(),
        description,
        color
    };
    
    if (eventId) {
        // Modification
        const index = events.findIndex(e => e.id === eventId);
        if (index !== -1) {
            events[index] = { ...events[index], ...eventData };
        }
    } else {
        // Ajout
        eventData.id = generateId();
        events.push(eventData);
    }
    
    saveEvents();
    filteredEvents = [...events];
    displayEvents();
    loadEventsToCalendar();
    updateStatistics();
    eventModal.hide();
}

// Supprimer un événement
function deleteEvent() {
    if (!currentEventId) return;
    
    events = events.filter(e => e.id !== currentEventId);
    saveEvents();
    filteredEvents = [...events];
    displayEvents();
    loadEventsToCalendar();
    updateStatistics();
    deleteModal.hide();
    currentEventId = null;
}

// Mettre à jour les dates d'un événement (déplacement dans le calendrier)
function updateEventDates(eventId, newStart, newEnd) {
    const event = events.find(e => e.id === eventId);
    if (!event) return;
    
    event.start = newStart.toISOString();
    event.end = (newEnd || newStart).toISOString();
    
    saveEvents();
    filteredEvents = [...events];
    displayEvents();
    updateStatistics();
}

// Mettre à jour les statistiques
function updateStatistics() {
    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const weekLater = new Date(today.getTime() + 7 * 86400000);
    
    document.getElementById('totalEvents').textContent = events.length;
    
    const todayCount = events.filter(e => {
        const eventDate = new Date(e.start);
        const eventDay = new Date(eventDate.getFullYear(), eventDate.getMonth(), eventDate.getDate());
        return eventDay.getTime() === today.getTime();
    }).length;
    document.getElementById('todayEvents').textContent = todayCount;
    
    const weekCount = events.filter(e => {
        const eventDate = new Date(e.start);
        return eventDate >= today && eventDate < weekLater;
    }).length;
    document.getElementById('weekEvents').textContent = weekCount;
}

// Rechercher des événements
function searchEvents() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    
    if (searchTerm === '') {
        filteredEvents = [...events];
    } else {
        filteredEvents = events.filter(event => 
            event.title.toLowerCase().includes(searchTerm) ||
            (event.description && event.description.toLowerCase().includes(searchTerm))
        );
    }
    
    displayEvents();
}

// Trier les événements
function sortEvents() {
    const sortBy = document.getElementById('sortSelect').value;
    
    switch(sortBy) {
        case 'date-asc':
            filteredEvents.sort((a, b) => new Date(a.start) - new Date(b.start));
            break;
        case 'date-desc':
            filteredEvents.sort((a, b) => new Date(b.start) - new Date(a.start));
            break;
        case 'title-asc':
            filteredEvents.sort((a, b) => a.title.localeCompare(b.title));
            break;
        case 'title-desc':
            filteredEvents.sort((a, b) => b.title.localeCompare(a.title));
            break;
    }
    
    displayEvents();
}

// Réinitialiser les filtres
function resetFilters() {
    document.getElementById('searchInput').value = '';
    document.getElementById('sortSelect').value = 'date-asc';
    filteredEvents = [...events];
    sortEvents();
}

// Configuration des événements
function setupEventListeners() {
    // Bouton ajouter
    document.getElementById('addEventBtn').addEventListener('click', openAddModal);
    
    // Bouton sauvegarder
    document.getElementById('saveEventBtn').addEventListener('click', saveEvent);
    
    // Bouton confirmer suppression
    document.getElementById('confirmDeleteBtn').addEventListener('click', deleteEvent);
    
    // Recherche
    document.getElementById('searchInput').addEventListener('input', searchEvents);
    
    // Tri
    document.getElementById('sortSelect').addEventListener('change', sortEvents);
    
    // Réinitialiser filtres
    document.getElementById('resetFilters').addEventListener('click', resetFilters);
    
    // Déconnexion
    document.getElementById('logoutBtn').addEventListener('click', function() {
        if (confirm('Voulez-vous vraiment vous déconnecter ?')) {
            sessionStorage.removeItem('currentUser');
            window.location.href = 'index.html';
        }
    });
}

// Fonctions utilitaires
function generateId() {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
}

function formatDate(date) {
    const options = { day: '2-digit', month: '2-digit', year: 'numeric' };
    return date.toLocaleDateString('fr-FR', options);
}

function formatTime(date) {
    const options = { hour: '2-digit', minute: '2-digit' };
    return date.toLocaleTimeString('fr-FR', options);
}

function formatDateInput(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}

function formatTimeInput(date) {
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    return `${hours}:${minutes}`;
}

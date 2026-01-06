// Récupération de l'utilisateur connecté
const user = JSON.parse(sessionStorage.getItem("currentUser"));
// Protection d'une page
if (!user) {
window.location.href = "login.html";
}
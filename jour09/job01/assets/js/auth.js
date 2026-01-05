function register(email, password, nom, prenom) {
// Validation de l'email
if (!isLaPlateformeEmail(email)) {
return { success: false, message: "Email invalide" };
}
// Création de l'utilisateur
const users = JSON.parse(localStorage.getItem("users")) || [];
const newUser = {
id: Date.now(),
email, password, nom, prenom,
role: "user"
};
users.push(newUser);
localStorage.setItem("users", JSON.stringify(users));
return { success: true };
}


function login(email, password) {
const users = JSON.parse(localStorage.getItem("users")) || [];
const user = users.find(u => u.email === email && u.password === password);
if (user) {
sessionStorage.setItem("currentUser", JSON.stringify(user));
return { success: true };
}
return { success: false, message: "Identifiants incorrects" };
}



// Récupération de l'utilisateur connecté
const user = JSON.parse(sessionStorage.getItem("currentUser"));
// Protection d'une page
if (!user) {
window.location.href = "login.html";
}
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
    console.log(user);
    if (user) {
        sessionStorage.setItem("currentUser", JSON.stringify(user));
        window.location.href = "calendar.html";
    }
    return { success: false, message: "Identifiants incorrects" };
}



// Récupération de l'utilisateur connecté
const user = JSON.parse(sessionStorage.getItem("currentUser"));
// Protection d'une page
// if (!user) {
//     window.location.href = "login.html";
// }

const formLogin = document.getElementById("login-form");
if (formLogin) {
    formLogin.addEventListener("submit", async (e) => {
        e.preventDefault();
        const email = document.getElementById("email");
        const password = document.getElementById("password");
        login(email.value.trim(), password.value.trim());
    })
}


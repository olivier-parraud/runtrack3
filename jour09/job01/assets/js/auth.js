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
    if (user.role === "user") {
        sessionStorage.setItem("currentUser", JSON.stringify(user));
        window.location.href = "calendar.html";
    }
    
    else if (user.role === "admin") {
         sessionStorage.setItem("currentUser", JSON.stringify(user));
        window.location.href = "backoffice.html";
    }
    return { success: false, message: "Identifiants incorrects" };
}



// Récupération de l'utilisateur connecté
const user = JSON.parse(sessionStorage.getItem("currentUser"));
// Protection d'une page
// if (!user) {
//     window.location.href = "login.html";
// }

// Afficher les infos utilisateur et gérer les boutons de la navbar
document.addEventListener('DOMContentLoaded', function() {
    const userInfo = document.getElementById('userInfo');
    const logoutBtn = document.getElementById('logoutBtn');
    const adminBtn = document.getElementById('adminBtn');
    
    if (user && userInfo) {
        userInfo.textContent = `Bienvenue, ${user.prenom || user.email}`;
        
        if (logoutBtn) {
            logoutBtn.style.display = 'inline-block';
            logoutBtn.addEventListener('click', function() {
                if (confirm('Voulez-vous vraiment vous déconnecter ?')) {
                    sessionStorage.removeItem('currentUser');
                    window.location.href = 'index.html';
                }
            });
        }
        
        // Afficher le bouton admin seulement si l'utilisateur est admin
        if (user.role === 'admin' && adminBtn) {
            adminBtn.style.display = 'inline-block';
        }
    }
});

const formLogin = document.getElementById("login-form");
if (formLogin) {
    formLogin.addEventListener("submit", async (e) => {
        e.preventDefault();
        const email = document.getElementById("email");
        const password = document.getElementById("password");
        login(email.value.trim(), password.value.trim());
    })
}

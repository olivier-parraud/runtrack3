async function loadUsers() {
    try {
        const response = await fetch("assets/data/users.json");
        const users = await response.json();
        localStorage.setItem("users", JSON.stringify(users))
        return users;
    } catch (error) {
        console.error("Erreur de chargement:", error);
        return [];
    }
}


function isValidEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}


function isLaPlateformeEmail(email) {
    return email.endsWith("@laplateforme.io");
}


loadUsers();
document.addEventListener('DOMContentLoaded', function () {
    const tbody = document.querySelector('table tbody');
    const button = document.querySelector('button');

    function updateTable(users) {
        tbody.innerHTML = users.map(user =>
            `<tr><td>${user.id}</td><td>${user.nom}</td><td>${user.prenom}</td><td>${user.email}</td></tr>`
        ).join('');
    }

    async function fetchUsers() {
        try {
            const response = await fetch('users.php');
            const data = await response.json();
            if (Array.isArray(data)) {
                updateTable(data);
            } else {
                tbody.textContent = 'Erreur lors du chargement';
            }
        } catch (e) {
            tbody.textContent = 'Erreur lors du chargement';
        }
    }

    button.addEventListener('click', fetchUsers);
    fetchUsers();
});

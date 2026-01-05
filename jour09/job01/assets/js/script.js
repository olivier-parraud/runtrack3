// Charger users.json
async function loadUsers() {
 try {
 // 1. Faire la requête
 const response = await fetch("assets/data/users.json");
 // 2. Vérifier si ça a marché
 if (!response.ok) {
 throw new Error("Fichier non trouvé");
 }
 // 3. Convertir en objet JavaScript
 const users = await response.json();
 // 4. Afficher dans la console
 console.log(users);
 // 5. Utiliser les données
 users.forEach(user => {
 console.log(`${user.nom} - ${user.email}`);
 });
 } catch (error) {
 console.error("Erreur:", error);
 }
}
// Appeler la fonction
loadUsers();
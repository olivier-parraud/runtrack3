// // Charger users.json
// async function loadUsers() {
//  try {
//  // 1. Faire la requête
//  const response = await fetch("assets/data/users.json");
//  // 2. Vérifier si ça a marché
//  if (!response.ok) {
//  throw new Error("Fichier non trouvé");
//  }
//  // 3. Convertir en objet JavaScript
//  const users = await response.json();
//  // 4. Afficher dans la console
//  console.log(users);
//  // 5. Utiliser les données
//  users.forEach(user => {
//  console.log(`${user.nom} - ${user.email}`);
//  });
//  } catch (error) {
//  console.error("Erreur:", error);
//  }
// }
// // Appeler la fonction
// loadUsers();

// async function loadUsers() {
//     try {
//         const response = await fetch("assets/data/users.json");
//         const users = await response.json();
//         localStorage.setItem("users", JSON.stringify(users))
//         return users;
//     } catch (error) {
//         console.error("Erreur de chargement:", error);
//         return [];
//     }
// }




// function isValidEmail(email) {
//     const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return regex.test(email);
// }


// function isLaPlateformeEmail(email) {
//     return email.endsWith("@laplateforme.io");
// }
// // Validation complète
// // if (!isValidEmail(email)) {
// //     alert("Format d'email invalide");
// //     return;
// // }
// // if (!isLaPlateformeEmail(email)) {
// //     alert("Seuls les emails @laplateforme.io sont acceptés");
// //     return;
// // }

// loadUsers();







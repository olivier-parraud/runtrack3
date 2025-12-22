async function afficherUsers() {
    const reponse = await fetch("./users.json");
    const users = await reponse.json();
    console.log(users);
    return users;
}

async function filterUsers() {
    const users = await afficherUsers();

    const filter = users.filter((users) => users.age >= 28 && users.ville == "Marseille");
    console.log(filter);
}

// users.then(results => {
//     console.log("ok");
//     console.log(results);
// });

filterUsers();
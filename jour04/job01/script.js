// Création du bouton et ajout au body
const button = document.createElement("button");
button.id = "button";
button.textContent = "Clique";
document.body.appendChild(button);

button.addEventListener("click", () => {
    fetch("expression.txt")
        .then(response => response.text())
        .then(text => {
            const p = document.createElement("p");
            p.textContent = text;
            document.body.appendChild(p);
        })
        .catch(error => {
            console.error("Erreur:", error);
        });
});


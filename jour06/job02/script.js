// Modale modalePapillon
const modalePapillon = `
<div class="modal fade" id="modalePapillon" tabindex="-1">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Confirmation d'achat</h5>
      </div>
      <div class="modal-body">
        <p>Félicitations ! Vous avez acheté un papillon ! 🦋</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Fermer</button>
      </div>
    </div>
  </div>
</div>
`;

document.body.insertAdjacentHTML("beforeend", modalePapillon);

//Clique sur le papillon
document.querySelector(".card .btn-primary").addEventListener("click", function (e) {
    e.preventDefault();

    // Affiche la modale
    const modale = document.getElementById("modalePapillon");
    modale.classList.add("show");
    modale.style.display = "block";
    document.body.classList.add("modal-open");

    const backdrop = document.createElement("div");
    backdrop.className = "modal-backdrop fade show";
    document.body.appendChild(backdrop);

    //Ferme la modale
    modale.querySelector(".btn-secondary").addEventListener("click", function () {
        modale.classList.remove("show");
        modale.style.display = "none";
        document.body.classList.remove("modal-open");
        backdrop.remove();
    });
});

//Boutin rebooter le monde
const bladeRunner = [
    "J'ai vu tant de choses que vous, humains, ne pourriez pas croire...",
    "Révéille-toi ! Il est temps de mourir.",
    "J'ai peur de mourir.",
    "Tous ces moments se perdront dans l'oubli, comme les larmes dans la pluie.",
    "C'est dommage qu'elle ne vive pas ! Mais qui vit éternellement ?"
];

document.querySelector(".btn-danger").addEventListener("click", function () {
    const citationAleatoire = bladeRunner[Math.floor(Math.random() * bladeRunner.length)];
    document.querySelector(".col-8 .lead").textContent = citationAleatoire;
});

//Pagination
const contenu = [
    "Fais-le ou ne le fais pas. Il n'y a pas d'essai. Yoda.",
    "La peur mène à la colère. La colère mène à la haine. La haine mène à la souffrance. Yoda.",
    "La taille importe peu. Regarde-moi. Est-ce à cause de ma taille que tu me juge ? Yoda."
];


const pagination = document.querySelectorAll(".pagination .page-item a.page-link");

pagination.forEach(function (lien) {
    lien.addEventListener("click", function (e) {
        e.preventDefault();
        const texte = lien.textContent.trim();
        if (texte === "1" || texte === "2" || texte === "3") {
            const indexContenu = parseInt(texte) - 1;
            document.querySelector(".col-8 .lead").textContent = contenu[indexContenu];
        }
    });
});


//Liste groupée
const liste = document.querySelectorAll(".list-group-item");

liste.forEach(function (element) {
    element.addEventListener("click", function () {
        liste.forEach(l => l.classList.remove("active"));

        element.classList.add("active")
    });
});

// Flèches - Barre de progression
const progressBar = document.querySelector(".progress-bar");
const spans = document.querySelectorAll('.d-flex.justify-content-center.align-items-center.m-5 span');
let flecheGauche = null;
let flecheDroite = null;
spans.forEach(span => {
    if (span.textContent.includes('⬅︎')) flecheGauche = span;
    if (span.textContent.includes('➡︎')) flecheDroite = span;
});

if (flecheGauche && flecheDroite && progressBar) {
    flecheGauche.style.cursor = "pointer";
    flecheDroite.style.cursor = "pointer";

    flecheGauche.addEventListener("click", function () {
        let valeurActuelle = parseInt(progressBar.style.width);
        valeurActuelle = isNaN(valeurActuelle) ? 0 : valeurActuelle;
        valeurActuelle = Math.max(0, valeurActuelle - 10);
        progressBar.style.width = valeurActuelle + "%";
    });

    flecheDroite.addEventListener("click", function () {
        let valeurActuelle = parseInt(progressBar.style.width);
        valeurActuelle = isNaN(valeurActuelle) ? 0 : valeurActuelle;
        valeurActuelle = Math.min(100, valeurActuelle + 10);
        progressBar.style.width = valeurActuelle + "%";
    });
}

//Touches D, G, C
let touches = [];

const modaleFormulaire = `
<div class="modal fade" id="modaleFormulaire" tabindex="-1">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Récapitulatif du formulaire</h5>
      </div>
      <div class="modal-body" id="recapFormulaire">
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Fermer</button>
      </div>
    </div>
  </div>
</div>
`;

document.body.insertAdjacentHTML("beforeend", modaleFormulaire);

document.addEventListener("keydown", function (e) {
    const touche = e.key.toLowerCase();

    touches.push(touche);

    if (touches.length > 3) {
        touches.shift();
    }

    if (touches.join("") === "dgc") {


        const login = document.querySelector('input[placeholder="Login"]').value;
        const mdp = document.querySelector('input[placeholder="Mot de Passe"]').value;
        const dogecoin = document.querySelector('input[aria-label="Amount (to the nearest dollar)"]').value;
        const url = document.querySelector('#basic-url').value;

        document.getElementById("recapFormulaire").innerHTML = `<p><strong>Login :</strong> ${login || 'Non renseigné'}</p>
      <p><strong>Mot de passe :</strong> ${mdp || 'Non renseigné'}</p>
      <p><strong>DogeCoin :</strong> ${dogecoin || 'Non renseigné'}</p>
      <p><strong>URL :</strong> ${url || 'Non renseigné'}</p>
    `;

        $("#modaleFormulaire").modal("show");

        touches = [];

    }
});

//Validation du formulaire
const formulaire = document.querySelector("form");
const spinner = document.querySelector(".spinner-border");

formulaire.addEventListener("submit", function (e) {
    e.preventDefault();

    const email = document.querySelector("#formGroupExampleInput").value;
    const password = document.querySelector("#formGroupExampleInput2").value;

    if (email.trim() !== "" && password.trim() !== "") {
        const couleurs = ["text-primary", "text-secondary", "text-success", "text-danger", "text-warning", "text-info", "text-dark"];

        couleurs.forEach(c => spinner.classList.remove(c));

        const couleurAleatoire = couleurs[Math.floor(Math.random() * couleurs.length)];
        spinner.classList.add(couleurAleatoire);
    }
})


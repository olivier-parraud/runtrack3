//Navbar
const toggle = document.getElementById("toggle");
const nav = document.getElementById("nav");

toggle.addEventListener("click", () => {
    nav.classList.toggle("active");
});


//Inscription
//Récupère les éléments des formulaires
const form = document.getElementById("formInscription");
const nomInput = document.getElementById("nom");
const prenomInput = document.getElementById("prenom");
const emailInput = document.getElementById("email");
const mdpInput = document.getElementById("mdp");
const adresseInput = document.getElementById("adresse");
const codepostalInput = document.getElementById("codepostal");

function attendre(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

//Validation du nom
async function validerNom() {
    const nom = nomInput.value.trim();
    const erreurNom = document.getElementById("erreur-nom");

    await attendre(300);

    if (nom === "") {
        erreurNom.textContent = "Vous devez entrer votre nom";
        erreurNom.classList.add("visible");
        nomInput.classList.add("erreur");
        nomInput.classList.remove("valide");
        return false;
    }

    if (nom.length < 2) {
        erreurNom.textContent = "Le nom doit contenir au moins 2 caractères";
        erreurNom.classList.add("visible");
        nomInput.classList.add("erreur");
        nomInput.classList.remove("valide");
        return false;
    }
}

//Validation du prénom
async function validerPrenom() {
    const prenom = prenomInput.value.trim();
    const erreurPrenom = document.getElementById("erreur-prenom");

    await attendre(300);

    if (prenom === "") {
        erreurPrenom.textContent = "Vous devez entrer votre prénom";
        erreurPrenom.classList.add("visible");
        erreurPrenom.classList.add("erreur");
        prenomInput.classList.remove("valide");
        return false;
    }

    if (prenom.length < 2) {
        erreurPrenom.textContent = "Le prénom doit contenir au moins 2 caractères";
        erreurPrenom.classList.add("visible");
        erreurPrenom.classList.add("erreur");
        prenomInput.classList.remove("valide");
        return false;
    }
}

//Validation Email
async function validerEmail() {
    const email = emailInput.value.trim();
    const erreurEmail = document.getElementById('erreur-email');

    await attendre(300);

    if (email === '') {
        erreurEmail.textContent = 'L\'email est obligatoire';
        erreurEmail.classList.add('visible');
        emailInput.classList.add('erreur');
        emailInput.classList.remove('valide');
        return false;
    }
}

//Validation mot de passe
async function validerMdp() {
    const mdp = mdpInput.value;
    const erreurMdp = document.getElementById("erreur-mdp");

    await attendre(300);

    if (mdp === "") {
        erreurMdp.textContent = "Vous devez entrer votre mot de passe";
        erreurMdp.classList.add("visible");
        mdpInput.classList.add("erreur");
        mdpInput.classList.remove("valide");
        return false;
    }

    if (mdp.length < 8) {
        erreurMdp.textContent = "Le mot de passe doit contenur au moins 8 caractères"
        erreurMdp.classList.add("visible");
        mdpInput.classList.add("erreur");
        mdpInput.classList.remove("valide");
        return false;
    }

    //Vérifie qu'il y a une maj, une min et un chiffre
    const regexMaj = /[A-Z]/;
    const regexMin = /[a-z]/;
    const regexChiffre = /[0-9]/;

    if (!regexMaj.test(mdp) || !regexMin.test(mdp) || !regexChiffre.test(mdp)) {
        erreurMdp.textContent = "Votre mot de passe doit contenir au moins une majuscule, une minuscule et un chiffre";
        erreurMdp.classList.add("visible");
        mdpInput.classList.add("erreur");
        mdpInput.classList.remove("valide");
        return false;
    }

    erreurMdp.classList.remove("visible");
    mdpInput.classList.remove("erreur");
    mdpInput.classList.add("valide");
    return true;
}

//Validation de l'adresse
async function validerAdresse() {
    const adresse = adresseInput.value.trim();
    const erreurAdresse = getElementById("erreur-adresse");

    await attendre(300);

    if (adresse === "") {
        erreurAdresse.textContent = "Vous devez entrer votre adresse";
        erreurAdresse.classList.add("visible");
        adresseInput.classList.add("erreur");
        adresseInput.classList.remove("valide");
        return false;
    }

    if (adresse.length < 5) {
        erreurAdresse.textContent = "Votre adresse doit contenir au moins 5 caractères";
        erreurAdresse.classList.add("visible");
        adresseInput.classList.add("erreur");
        adresseInput.classList.add("valide");
        return false;
    }

    erreurAdresse.classList.remove("visible");
    adresseInput.classList.remove("erreur");
    adresseInput.classList.add("valide");
    return true;
}

//Validation du code postal
async function validerCodepostal() {
    const codepostal = codepostalInput.value.trim();
    const erreurCodepostal = getElementById("erreur-codepostal");

    await attendre(300);

    if (codepostal === "") {
        erreurCodepostal.textContent = "Vous devez entrer votre code postal";
        erreurCodepostal.classList.add("visible");
        codepostalInput.classList.add("erreur");
        codepostalInput.remove("valide");
        return false;
    }

    const regexCodePostal = /^[0-9]{5}$/;

    if (!regexCodePostal.test(codepostal)) {
        erreurCodepostal.textContent = "Votre code postal doit contenir 5 chiffres";
        erreurCodepostal.classList.add("visible");
        codepostalInput.classList.add("erreur");
        codepostalInput.classList.remove("valide");
        return false;
    }

    erreurCodepostal.classList.remove("visible");
    codepostalInput.classList.remove("erreur");
    codepostalInput.classList.add("visible");
    return true;
}

//Ecouteurs changements champs
nomInput.addEventListener("blur", validerNom);
nomInput.addEventListener("input", validerNom);

prenomInput.addEventListener("blur", validerPrenom);
prenomInput.addEventListener("input", validerPrenom);

mdpInput.addEventListener("blur", validerMdp);
mdpInput.addEventListener("input", validerMdp);

emailInput.addEventListener("blur", validerEmail);
emailInput.addEventListener("input", validerEmail);

adresseInput.addEventListener("blur", validerAdresse);
adresseInput.addEventListener("input", validerAdresse);

codepostalInput.addEventListener("blur", validerCodepostal);
codepostalInput.addEventListener("input", validerCodepostal);

//Gestion de la soumission du formulaire
form.addEventListener("submit", async function (e) {
    e.preventDefault();

    //Validation de tous les champs
    const nomValide = await validerNom();
    const prenomValide = await validerPrenom();
    const emailValide = await validerEmail();
    const mdpValide = await validerMdp();
    const adresseValide = await validerCodepostal();
    const codepostalValide = await validerCodepostal();

    if (nomValide && prenomValide && emailValide && mdpValide && adresseValide && codepostalValide) {
        alert("Inscription réussie");
    }
});


// Connexion
const formConnexion = document.getElementById("formConnexion");
const emailConnexion = document.getElementById("email");
const mdpConnexion = document.getElementById("mdp");

async function validerEmailConnexion() {
    const email = emailConnexion.value.trim();
    const erreurEmail = document.getElementById("erreur-email");

    await attendre(300);

    if (email === "") {
        erreurEmail.textContent = "Vous devez entrer votre email";
        erreurEmail.classList.add("visible");
        emailConnexion.classList.add("erreur");
        emailConnexion.classList.remove("valide");
        return false;
    }

    erreurEmail.classList.remove("visible");
    emailConnexion.classList.remove("erreur");
    emailConnexion.classList.add("valide");
    return true;
}

async function validerMdpConnexion() {
    const mdp = mdpConnexion.value;
    const erreurMdp = document.getElementById("erreur-mdp");

    await attendre(300);

    if (mdp === "") {
        erreurMdp.textContent = "Vous devez entrer votre mot de passe";
        erreurMdp.classList.add("visible");
        mdpConnexion.classList.add("erreur");
        mdpConnexion.classList.remove("valide");
        return false;
    }

    if (mdp.length < 8) {
        erreurMdp.textContent = "Le mot de passe doit contenir au moins 8 caractères";
        erreurMdp.classList.add("visible");
        mdpConnexion.classList.add("erreur");
        mdpConnexion.classList.remove("valide");
        return false;
    }

    erreurMdp.classList.remove("visible");
    mdpConnexion.classList.remove("erreur");
    mdpConnexion.classList.add("valide");
    return true;
}

// Ecouteurs changement champs pour la connexion
emailConnexion.addEventListener("blur", validerEmailConnexion);
emailConnexion.addEventListener("input", validerEmailConnexion);

mdpConnexion.addEventListener("blur", validerMdpConnexion);
mdpConnexion.addEventListener("input", validerMdpConnexion);

// Gestion de soumission de formulaire de connexion
formConnexion.addEventListener("submit", async function (e) {
    e.preventDefault();

    const emailValide = await validerEmailConnexion();
    const mdpValide = await validerMdpConnexion();

    if (emailValide && mdpValide) {
        alert("Connexion réussie !");
    }
});


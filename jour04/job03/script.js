//Rempli le select avec les types de Pokemon
async function selectType() {
    const pokemon = await afficherPokemon();
    const typeSet = new Set();
    pokemon.forEach(p => p.type.forEach(t => typeSet.add(t)));
    const select = document.querySelector('select[name="type"]');
    typeSet.forEach(type => {
        const option = document.createElement("option");
        option.value = type;
        option.textContent = type;
        select.appendChild(option);
    });
}

//Affiche le résultat
async function afficherPokemon() {
    const reponse = await fetch("./pokemon.json");
    const pokemon = await reponse.json();
    return pokemon;
}

async function filterPokemon() {
    const pokemon = await afficherPokemon();
}

//Filtre dans le formulaire
async function filtrerForm() {
    const pokemon = await afficherPokemon();
    const form = document.getElementById("filterForm");
    const id = form.id.value.trim();
    const nom = form.nom.value.trim().toLowerCase();
    const type = form.type.value;
    let resultats = pokemon;
    if (id) {
        resultats = resultats.filter(p => p.id == id);
    }
    if (nom) {
        resultats = resultats.filter(p => p.name.english.toLowerCase().includes(nom) || p.name.french.toLowerCase().includes(nom));
    }
    if (type) {
        resultats = resultats.filter(p => p.type.includes(type));
    }
    afficherResultats(resultats);
}

window.addEventListener("DOMContentLoaded", () => {
    selectType();
    document.querySelector('input[name="filtrer"]').addEventListener('click', filtrerForm);
})


// Affiche les résultats filtrés dans #results
function afficherResultats(resultats) {
    const resultsDiv = document.getElementById('results');
    if (!resultats.length) {
        resultsDiv.innerHTML = '<p>Aucun résultat trouvé.</p>';
        return;
    }
    let html = '<table border="1" style="border-collapse:collapse;"><thead><tr><th>ID</th><th>Nom (FR)</th><th>Nom (EN)</th><th>Type</th></tr></thead><tbody>';
    resultats.forEach(p => {
        html += `<tr><td>${p.id}</td><td>${p.name.french}</td><td>${p.name.english}</td><td>${p.type.join(', ')}</td></tr>`;
    });
    html += '</tbody></table>';
    resultsDiv.innerHTML = html;
}


filterPokemon();
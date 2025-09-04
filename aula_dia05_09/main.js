document.getElementById("buscarPokemonBtn").addEventListener("click", buscarPokemon);
document.getElementById("buscarCountryBtn").addEventListener("click", buscarPais);

async function buscarPokemon() {
  const nome = document.getElementById("pokemonName").value.toLowerCase();
  const url = `https://pokeapi.co/api/v2/pokemon/${nome}`;

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error("Pokémon não encontrado!");

    const data = await response.json();

    // 🔎 Região via espécie
    let regiaoPoke = "Desconhecida";
    try {
      const speciesRes = await fetch(data.species.url);
      const speciesData = await speciesRes.json();

      const generation = speciesData.generation.name;
      const mapaRegioes = {
        "generation-i": "Kanto",
        "generation-ii": "Johto",
        "generation-iii": "Hoenn",
        "generation-iv": "Sinnoh",
        "generation-v": "Unova",
        "generation-vi": "Kalos",
        "generation-vii": "Alola",
        "generation-viii": "Galar",
        "generation-ix": "Paldea"
      };

      regiaoPoke = mapaRegioes[generation] || "Desconhecida";
    } catch (e) {
      console.warn("Não foi possível buscar a região da espécie:", e.message);
    }

    // 🔎 Região via encontros (se disponível, substitui a da espécie)
    try {
      const encountersRes = await fetch(data.location_area_encounters);
      const encounters = await encountersRes.json();

      if (encounters.length > 0) {
        const areaUrl = encounters[0].location_area.url;
        const areaRes = await fetch(areaUrl);
        const areaData = await areaRes.json();
        regiaoPoke = areaData.location.region.name || regiaoPoke;
      }
    } catch (e) {
      console.warn("Não foi possível buscar a região dos encontros:", e.message);
    }

    // ✅ Criar apenas UM card
    document.getElementById("resultado").innerHTML += `
      <div class="card">
        <h2>${data.name.toUpperCase()}</h2>
        <img src="${data.sprites.front_default}" alt="${data.name}">
        <p><strong>ID:</strong> ${data.id}</p>
        <p><strong>Tipo:</strong> ${data.types.map(t => t.type.name).join(", ")}</p>
        <p><strong>Região:</strong> ${regiaoPoke}</p>
      </div>
    `;

    document.getElementById("pokemonName").value = "";
   } catch (error) {
  document.getElementById("mensagem").innerText = error.message;
}
}

async function buscarPais() {
  const nome = document.getElementById("countryName").value.toLowerCase();
  const url = `https://restcountries.com/v3.1/name/${nome}`;

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error("País não encontrado!");

    const data = await response.json();
    const pais = data[0];

    document.getElementById("resultado").innerHTML += `
      <div class="card">
        <h2>${pais.name.common}</h2>
        <img src="${pais.flags.svg}" alt="Bandeira de ${pais.name.common}">
        <p><strong>Capital:</strong> ${pais.capital ? pais.capital[0] : "Não informado"}</p>
        <p><strong>Região:</strong> ${pais.region}</p>
        <p><strong>População:</strong> ${pais.population.toLocaleString()}</p>
      </div>
    `;

    document.getElementById("countryName").value = "";

  } catch (error) {
  document.getElementById("mensagem").innerText = error.message;
}
}
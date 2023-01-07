
const $container = document.getElementById("container");
const URL_API = "https://rickandmortyapi.com/api/character";


const renderCharacter= ({image,name,species,status,gender,origin})=>{
    return `<div class="card">
    <img class="img-card" src="${image}" alt="imagen de personaje">
    <h1>${name}</h1>
    <div class="data">
        <h2>Species: <small>${species}</small></h2>
        <h2>Status: <small>${status}</small></h2>
        <h2>Gender: <small>${gender}</small></h2>
        <h2>Origin: <small>${origin.name}</small></h2>
    </div>
</div>`;
}

const renderToHtml = (characters)=>{
    const renderCards = characters.map((character)=>renderCharacter(character));
    $container.innerHTML = renderCards.join("");
}

const callCharacters = async ()=>{
    const response = await fetch(URL_API);
    const data = await response.json();
    renderToHtml(data.results);
}

callCharacters();
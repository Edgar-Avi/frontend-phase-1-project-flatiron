function getCharacters(rickApi) {
const searchInput = document.querySelector("[data-search]")
   let user = []
//search-bar
searchInput.addEventListener("input", e => {
    const value = e.target.value.toLowerCase()
    user.forEach(user => {
        const isVisible = user.name.includes(value)
        user.element.classList.toggle("hide", !isVisible)
    })
    console.log(value)

const getCharacters = document.getElementById("search")
    getCharacters.addEventListener("click", () => {
        search()
    })

})
    const results = fetch("https://rickandmortyapi.com/api/character");

    results
        .then(response => response.json())
        .then(data => {
            rickApi(data)
        })
}

getCharacters(data => {
   getCharacters = data.results.map(characters => {
    const article = document.createRange().createContextualFragment( 
        /*html into main*/`
    <article>

        <div class="image-container">
            <img src="${characters.image}" alt="CharacterImg">
        </div>

        <h2>${characters.name}</h2>
        <span>Status: ${characters.status}</span><br>
        <span>Species: ${characters.species}</span><br>
        <span>Gender: ${characters.gender}</span>

    </article>
    `)

    const main = document.querySelector("main");
    main.append(article);

    return {name: characters.name}

   })
})
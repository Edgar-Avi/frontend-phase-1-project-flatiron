function getCharacters(rickApi) {

    const results = fetch("https://rickandmortyapi.com/api/character");

    results
        .then(response => response.json())
        .then(data => {
            rickApi(data)
        });
}

getCharacters(data => {
   data.results.forEach(characters => {

    const article = document.createRange().createContextualFragment( 
    /*html*/`
    <article>

        <div class="image-container">
            <img src="${characters.image}" alt="CharacterImg">
        </div>

        <h2>${characters.name}</h2>
        <span>Status: ${characters.status}</span><br>
        <span>Species: ${characters.species}</span><br>
        <span>Gender: ${characters.gender}</span>


    </article>
    `);

    const main = document.querySelector("main");
    main.append(article);


   });
});
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

    const article = document.createRange().createContextualFragment( /*html*/`
    <article>

        <div class="image-container">
            <img src="https://rickandmortyapi.com/api/character/avatar/2.jpeg" alt="Character"></img>
        </div>

        <h2>Character</h2>
        <span>Character status</span>

    </article>
    `);


   });
});
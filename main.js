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
            <img src="${characters.image}" alt="Character">
        </div>

        <h2>${characters.name}</h2>
        <span>${characters.status}</span>

    </article>
    `);

    const main = document.querySelector("main");
    main.append(article);


   });
});
function getCharacters(rickApi) {

    const results = fetch("https://rickandmortyapi.com/api/character");

    results
        .then(response => response.json())
        .then(data => {
            rickApi(data)
        });
}

getCharacters(data => {
    console.log(data);
});
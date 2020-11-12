var sports = $("#sports");
var genres = [];

var storedGenres = JSON.parse(localStorage.getItem("genres"));

if (storedGenres !== null) {
    genres = storedGenres;
}

if (genres)
    console.log(genres);
$(document).ready(function() {
    var genres = [];
    var stations = [];
    var container = $(".container");
    var storedGenres = JSON.parse(localStorage.getItem("genres"));
    var storedStations = JSON.parse(localStorage.getItem("stations"));
    var dataGenre = $(".data-genre");

    // get info from localStorage
    if (storedStations !== null) {
        stations = storedStations;
    }

    if (storedGenres !== null) {
        genres = storedGenres;
    }

    // generate a card for each genre
    for (var i = 0; i < genres.length; i++) {
        var row = $("<div>");
        row.addClass("row");
        container.append(row);

        var col = $("<div>");
        col.addClass("col-4");
        row.append(col);

        var card = $("<div>");
        card.addClass("card");
        col.append(card);

        var cardContent = $("<div>");
        cardContent.addClass("card-content white-text");
        card.append(cardContent);

        var span = $("<span>");
        span.addClass("card-title");
        span.html(genres[i]);
        cardContent.append(span);

        var stationLinksDiv = $("<div>");
        stationLinksDiv.addClass("card-action");
        stationLinksDiv.attr("data-genre", genres[i]);
        card.append(stationLinksDiv);
    }

    // fill in the links for each radio found for a genre
    for (var i = 0; i < stations.length; i++) {
        // locate the card to put it in
        // $(event.target).data('city')
        // .addClass('demo');
        var whichGenre = '[data-genre="' + stations[i].genre + '"]';
        var genreCard = $(whichGenre);

        // add a link to that station
        var link = $("<a>");
        link.attr("href", "#");
        link.html(stations[i].callsign);
        genreCard.append(link);
    }
});
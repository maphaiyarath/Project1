$(document).ready(function() {
    var genres = [];
    var container = $(".container");

    var storedGenres = JSON.parse(localStorage.getItem("genres"));

    if (storedGenres !== null) {
        genres = storedGenres;
    }

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
});



/*
<div class="row">
    <div class="col-4">
        <div class="card">
            <div class="card-content white-text">
                <span class="card-title">Sports</span>
                <p>I am a very simple card. I am good at containing small bits of information.</p>
            </div>
            <div id="sports" class="card-action">
                <a href="#">Link</a>
                <a href="#">Link</a>
            </div>
        </div>
    </div>
</div>
*/
$(document).ready(function() {
    // getting past CORS
    jQuery.ajaxPrefilter(function(options) {
        if (options.crossDomain && jQuery.support.cors) {
            options.url = 'https://cors-anywhere.herokuapp.com/' + options.url;
        }
    });

    // global variables
    var callsign = '';
    var city = '';
    var state = '';
    var stations = [];
    var genres = [];

    // search button event handler
    $("#search-button").on("click", function(event) {
        event.preventDefault();

        // TODO: make sure the input is valid
        city = $("#city-input").val();
        // state = ;

        // if the input is valid, go to the results page and display the list of radio stations
        getStations();
        // window.location.href = './results.html';
        
        // TODO: otherwise, tell the user to search again
    });
    
    // return a list of radio stations using dar fm api
    function getStations() {
        // dar fm
        var apiKey = '4363387309';

        // for now, we are hard coding city & state
        city = 'san diego';
        state = 'ca';
        
        var darURL = 'http://api.dar.fm/darstations.php?callback=json&city=' + city + '&state=' + state + '&exact=1&partner_token=' + apiKey;
        var darURLEncoded = encodeURI(darURL);

        $.ajax({
            url: darURLEncoded,
            method: "GET"
        }).then(function(response) {
            stations = response.result[0].stations;
            // console.log(darURLEncoded);
            // console.log(stations.length);

            for (var i = 0; i < stations.length; i++) {
                localStorage.clear();

                // add to list of genres
                if (!genres.includes(stations[i].genre)) {
                    genres.push(stations[i].genre);
                }

                // station info
                var station = {
                    genre: stations[i].genre,
                    callsign: stations[i].callsign//,
                    // dial: stations[i].dial,
                    // slogan: stations[i].slogan
                }

                // stations.push(station);

                // create a new list item for every station
                // var stationEl = $("<li>");
                // stationEl.attr("class", "station");
                // stationEl.attr("style", "color: red;");
                // stationEl.html(stations[i].callsign + ' - ' + stations[i].slogan);
                // $("#search-list").append(stationEl);
            }

            console.log(stations);
            console.log(genres);

            localStorage.setItem('genres', JSON.stringify(genres));
            // localStorage.setItem('stations', JSON.stringify(stations));
            
            // console.log(stations);
        });
    }

    // get list of previously searched stations from local storage, if any
    function init() {
        var storedStations = JSON.parse(localStorage.getItem("stations"));
        var storedGenres = JSON.parse(localStorage.getItem("genres"));

        if (storedStations !== null) {
            stations = storedStations;
        }

        if (storedGenres !== null) {
            genres = storedGenres;
        }
    }

    init();
});


/*
<div class="row">
      <div class="col-4">
        <div class="card">
          <div class="card-content white-text">
            <span class="card-title">Sports</span>
            <p>I am a very simple card. I am good at containing small bits of information.
            I am convenient because I require little markup to use effectively.</p>
          </div>
          <div id="sports" class="card-action">
            <a href="#">Link</a>
            <a href="#">Link</a>
          </div>
        </div>
      </div>
    </div>
*/


/*
// get user's location based off of ip address
var queryURL = "http://ip-api.com/json/";

$.ajax({
    url: queryURL,
    method: "GET"
}).then(function(response) {
    city = response.city;
    state = response.region;

    getStations();
});
*/
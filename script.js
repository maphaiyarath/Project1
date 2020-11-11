$(document).ready(function() {
    // getting past CORS
    jQuery.ajaxPrefilter(function(options) {
        if (options.crossDomain && jQuery.support.cors) {
            options.url = 'https://cors-anywhere.herokuapp.com/' + options.url;
        }
    });

    // save city and state search inputs
    var city = '';
    var state = '';

    $("#search-button").on("click", function(event) {
        event.preventDefault();

        // make sure the input is valid
        console.log($("#city-input").val().trim());
        city = $("#city-input").val().trim();
        // state = ;

        // if the input is valid, go to the results page and display the list of radio stations
        // html/home.html
        // --> submit
        // html/results.html
        getStations();
        window.location.href = './results.html';

        // otherwise, tell the user to search again
    });
    
    // return a list of radio stations using dar fm api
    function getStations() {
        // dar fm
        var apiKey = '4363387309';
        city = 'Dallas';
        state = 'TX';
        
        // manually setting city / state for now
        var darURL = 'http://api.dar.fm/darstations.php?callback=json&city=' + city + '&state=' + state + '&exact=1&partner_token=' + apiKey;
        // var reformattedURL = encodeURI(darURL);

        $.ajax({
            url: darURL,
            method: "GET"
        }).then(function(response) {
            // console.log(darURL);
            console.log(response.result[0].stations);
            var results = response.result[0].stations;
            /*
            for (var i = 0; i < results.length; i++) {
                var stationEl = $("<li>");
                stationEl.attr("class", "station");
                stationEl.html(results[i].callsign + ' - ' + results[i].description);
                radioListEl.append(stationEl);
            }
            */
        });
    }

    
});




/*
var queryURL = "http://ip-api.com/json/";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) {
        city = response.city;
        state = response.region;
        console.log(city, state);

        getStations();
    });
*/
$(document).ready(function() {
    // getting past CORS
    jQuery.ajaxPrefilter(function(options) {
        if (options.crossDomain && jQuery.support.cors) {
            options.url = 'https://cors-anywhere.herokuapp.com/' + options.url;
        }
    });

    // save city and state search inputs
    var callsign = '';
    var city = '';
    var state = '';
    var stations = [];

    $("#search-button").on("click", function(event) {
        event.preventDefault();

        // make sure the input is valid
        console.log($("#city-input").val());
        city = $("#city-input").val();
        // state = ;

        // if the input is valid, go to the results page and display the list of radio stations
        // window.location.href = './results.html';
        getStations();
        

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
            stations = response.result[0].stations;
            console.log(darURL);
            for (var i = 0; i < stations.length; i++) {
                var stationEl = $("<li>");
                stationEl.attr("class", "station");
                stationEl.attr("style", "color: red;");
                stationEl.html(stations[i].callsign + ' - ' + stations[i].description);
                $("#search-list").append(stationEl);
            }
            
        });
    }

    
});




/*
// get user's location based off of ip address
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
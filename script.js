$(document).ready(function() {
    // getting past CORS
    jQuery.ajaxPrefilter(function(options) {
        if (options.crossDomain && jQuery.support.cors) {
            options.url = 'https://cors-anywhere.herokuapp.com/' + options.url;
        }
    });

    /*
    // find user's location based off of ip address
    var city = '';
    var state = '';
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

    // return a list of radio stations using dar fm api
    var radioListEl = $("#radio-list");
    function getStations() {
        // dar fm
        var apiKey = '4363387309';
        
        // manually setting city / state for now
        city = 'Austin';
        state = 'TX';
        var darURL = 'http://api.dar.fm/darstations.php?callback=json&city=' + city + '&state=' + state + '&exact=1&partner_token=' + apiKey;
        
        $.ajax({
            url: darURL,
            method: "GET"
        }).then(function(response) {
            console.log(response.result[0].stations);
            var results = response.result[0].stations;
            for (var i = 0; i < results.length; i++) {
                var stationEl = $("<li>");
                stationEl.attr("class", "station");
                stationEl.html(results[i].callsign + ' - ' + results[i].description);
                radioListEl.append(stationEl);
            }
        });
    }
});
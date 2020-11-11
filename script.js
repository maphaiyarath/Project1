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
        state = recdgitsponse.region;
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
<<<<<<< HEAD
});
=======
};

$.ajax(settings).done(function (response) {
    // console.log(response);
});

// npr
var nprCode = '';
var nprSettings = {
    "async": true,
    "crossDomain": true,
    "url": "https://api.npr.org/authorization/v2/device",
    "method": "POST",
    "headers": {
        "content-type": "application/x-www-form-urlencoded"
    },
    "data": {
        "client_id": "nprone_trial_hOUuSGVMR4IF",
        "client_secret": "4vkUM7sG4irc8NSxMLMK7IaXmTYEhIHBRaBM6S00",
        "scope": "localactivation"
    }
}

$.ajax(nprSettings).done(function (response) {
    // console.log(response);
    nprCode = response.device_code;
    console.log(nprCode);
});
*/
>>>>>>> 824480df83e226987586950127dd3f5f68569d65

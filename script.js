$(document).ready(function() {
    // find user's location based off ip address
    var location = '';
    var queryURL = "http://ip-api.com/json/";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) {
        location = response.region;
        console.log(location);
    })

    const settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://30-000-radio-stations-and-music-charts.p.rapidapi.com/rapidapi?country=ALL&genre=ALL",
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "c8dd0058cbmsh26fd340956d255bp1284d1jsna46b64cc3c14",
            "x-rapidapi-host": "30-000-radio-stations-and-music-charts.p.rapidapi.com"
        }
    };
    
    $.ajax(settings).done(function (response) {
        console.log(response);
    });
});

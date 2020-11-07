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
});
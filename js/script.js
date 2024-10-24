/* app.js */

// Initialize map (example: Google Maps API)
function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 10,
        center: {lat: -34.397, lng: 150.644}
    });

    var geocoder = new google.maps.Geocoder();

    document.getElementById('find-ride').addEventListener('click', function() {
        geocodeAddress(geocoder, map);
    });
}

function geocodeAddress(geocoder, map) {
    var address = document.getElementById('destination').value;
    geocoder.geocode({'address': address}, function(results, status) {
        if (status === 'OK') {
            map.setCenter(results[0].geometry.location);
            new google.maps.Marker({
                map: map,
                position: results[0].geometry.location
            });
        } else {
            alert('Geocode was not successful for the following reason: ' + status);
        }
    });
}

// Example Ride-Matching Function (simplified)
function matchRide() {
    let origin = document.getElementById('origin').value;
    let destination = document.getElementById('destination').value;
    let schedule = document.getElementById('schedule').value;

    if (origin && destination && schedule) {
        alert(`Finding a ride from ${origin} to ${destination} on ${schedule}...`);
        // You can implement real ride-matching logic here
    } else {
        alert("Please fill all fields!");
    }
}

document.getElementById('ride-submit').addEventListener('click', matchRide);

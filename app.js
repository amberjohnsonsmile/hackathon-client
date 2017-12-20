//const apiURL = "http://localhost:3000/";
const apiURL = "https://morning-fjord-96521.herokuapp.com/"

// Fetch and post

fetch(apiURL)
    .then(response => response.json())
    .then(console.log)
    .catch(console.error);

function postWolf() {
    fetch(apiURL, {
        method: "POST",
        body: JSON.stringify({
            data: "something"
        }),
        headers: new Headers ({
            "Content-Type": "application/json"
        })
    })
    .then(response => response.json())
    .then(console.log)
    .catch(console.error);
}

postWolf();

function initMap() {
  var myLatLng = {lat: 39.7392, lng: -104.9903};

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 4,
    center: myLatLng
  });

  var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    title: 'Hello World!'
  });
}

// Event listeners

document.querySelector("select").addEventListener("change", event => {
    event.preventDefault();
    console.log("changed");

});

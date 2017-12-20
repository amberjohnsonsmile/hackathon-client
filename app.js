const apiURL = "http://localhost:3000/";

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
  var myLatLng = {lat: -25.363, lng: 131.044};

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

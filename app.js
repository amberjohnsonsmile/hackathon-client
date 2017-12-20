const apiURL = "http://localhost:3000/";

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

// Event listeners

document.querySelector("select").addEventListener("change", event => {
    event.preventDefault();
    console.log("changed");

});

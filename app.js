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

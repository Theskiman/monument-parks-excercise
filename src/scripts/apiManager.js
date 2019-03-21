let apiURL = "http://localhost:8088";

let getAllMonuments = () => fetch(`${apiURL}/monuments`)
        .then(monumentsObject => monumentsObject.json());

let deleteMonuments = (monumentID) => fetch(`${apiURL}/monuments/${monumentID}`, {
    method: "DELETE"
})
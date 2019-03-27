let apiURL = "http://localhost:8088";

let getAllMonuments = () => fetch(`${apiURL}/monuments`)
  .then(monumentsObject => monumentsObject.json());

let deleteMonuments = (monumentID) => fetch(`${apiURL}/monuments/${monumentID}`, {
  method: "DELETE"
})

const patchMonument = (monumentId, updatedMonumentObject) => fetch(`${apiURL}/monuments/${monumentId}`, {
  method: "PATCH",
  headers: {
    "content-type": "application/json"
  },
  body: JSON.stringify(updatedMonumentObject)
})

const getmonument = (monumentId) => fetch(`${apiURL}/monuments/${monumentId}`).then(response => response.json())

const putMonument = (monumentId, updatedMonumentObject) => fetch(`${apiURL}/monuments/${monumentId}`, {
  method: "PUT",
  headers: {
    "content-type": "application/json"
  },
  body: JSON.stringify(updatedMonumentObject)
})
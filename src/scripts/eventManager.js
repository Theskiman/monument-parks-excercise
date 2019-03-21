let handleDelete = () => {
    console.log("Delete Button BROO", event.target.id.split("--")[1])
    let monumentID = event.target.id.split("--")[1]

    deleteMonuments(monumentID)
    .then(() => listMonuments())    
};
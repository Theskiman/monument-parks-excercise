let handleDelete = () => {
    console.log("Delete Button BROO", event.target.id.split("--")[1])
    let monumentID = event.target.id.split("--")[1]

    deleteMonuments(monumentID)
        .then(() => listMonuments())
};

const handleVisited = () => {
    console.log(
        "visited button clicked",
        event.target.parentNode.id.split("--")[1]
    );
    let monumentId = event.target.parentNode.id.split("--")[1];

    let visitedMonumentObject = {
        visited: true
    };

    patchMonument(monumentId, visitedMonumentObject).then(() => listMonuments());
};

const handleEdit = () => {
    console.log("edit button clicked", event.target.parentNode.id.split("--")[1]);
    let monumentId = event.target.parentNode.id.split("--")[1];

    const monumentArticle = document.querySelector(`#monument--${monumentId}`);
    console.log(monumentArticle)
    clearElement(monumentArticle);
    
    getmonument(monumentId).then(monumentToEdit => {
        console.log("test")
        const editFormFormonument = monumentEditForm(monumentToEdit);
        monumentArticle.appendChild(editFormFormonument);
    });
};

const handleUpdate = () => {
    console.log(
        "update button clicked",
        event.target.parentNode.id.split("--")[1]
    );
    let monumentId = event.target.parentNode.id.split("--")[1];

    const editedMonumentName = document.querySelector(`#edit-monument-name--${monumentID}`);
    const editedMonumentState = document.querySelector(`#edit-monument-state--${monumentID}`);
    const editedMonumentArea = document.querySelector(`#edit-monument-area--${monumentID}`)
    const editedParkdate = document.querySelector(`#edit-monument-date--${monumentID}`)
    let radioButtonValue = document.querySelector(`input[name="visited"]:checked`).value;

    console.log(editedParkName.value, editedParkState.value);

    let editedMonument = {
        name: editedMonumentName.value,
        state: editedMonumentState.value,
        area: editedMonumentArea.value,
        dateEstablished: editedParkdate.value,
        visited: (radioButtonValue === "true")

    };

    putMonument(monumentId, editedMonument).then(() => listMonuments());
};
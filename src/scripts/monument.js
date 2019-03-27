let buildMonumentHtml = monumentObject => {
    const monumentArticle = buildElement("section", `monument--${monumentObject.id}`)
    monumentArticle.appendChild(buildElement("h2", undefined, monumentObject.name))
    monumentArticle.appendChild(buildElement("p", undefined, monumentObject.state))

    let deleteMonument = buildElement("button", `delete-monument--${monumentObject.id}`, "Delete Monument")
    monumentArticle.appendChild(deleteMonument);
    deleteMonument.addEventListener("click", handleDelete)

    let editMonumentButton = buildElement("button", undefined, "Edit Monument")
    monumentArticle.appendChild(editMonumentButton);
    editMonumentButton.addEventListener("click", handleEdit)
    return monumentArticle;
}

let monumentEditForm = (monumentObject) => {
    let editFormFragment = document.createDocumentFragment()

  editFormFragment.appendChild(buildElement("label", undefined, "Name: "))
  editFormFragment.appendChild(buildElement("input", `edit-monument-name--${monumentObject.id}`, undefined, monumentObject.name))

  editFormFragment.appendChild(buildElement("label", undefined, "State: "))
  editFormFragment.appendChild(buildElement("input", `edit-monument-state--${monumentObject.id}`, undefined, monumentObject.state))

  editFormFragment.appendChild(buildElement("label", undefined, "Area: "))
  editFormFragment.appendChild(buildElement("input", `edit-monument-area--${monumentObject.id}`, undefined, monumentObject.area))
debugger
  editFormFragment.appendChild(buildElement("label", undefined, "Date: "))
  editFormFragment.appendChild(buildElement("input", `edit-monument-date--${monumentObject.id}`, undefined, monumentObject.dateEstablished))

  editFormFragment.appendChild(buildElement("label", undefined, "Visited: "))
  let visitedInput = buildElement("input", `edit-monument-visted--${monumentObject.id}`, "true", monumentObject.visited)
  visitedInput.type = "radio"
  visitedInput.name = "visited"
  visitedInput.value = true;
  editFormFragment.appendChild(visitedInput)
  editFormFragment.appendChild(buildElement("label", undefined, "Not Visited: "))
  let visitedInputTwo = buildElement("input", `edit-monument-visted--${monumentObject.id}`, "false", monumentObject.visited)
  visitedInputTwo.type = "radio"
  visitedInputTwo.name = "visited"
  visitedInputTwo.value = false;
  editFormFragment.appendChild(visitedInputTwo)


  const updateMonumentButton = buildElement("button", undefined, "Update")
  updateMonumentButton.addEventListener("click", handleUpdate)
  editFormFragment.appendChild(updateMonumentButton)

  return editFormFragment
}
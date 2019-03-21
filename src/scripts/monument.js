let buildMonumentHtml = monumentObject => {
    const monumentArticle = buildElement("section")
    monumentArticle.appendChild(buildElement("h2", undefined, monumentObject.name))
    monumentArticle.appendChild(buildElement("p", undefined, monumentObject.state))

    let deleteMonument = buildElement("button", `delete-park--${monumentObject.id}`, "Delete Monument")
    monumentArticle.appendChild(deleteMonument);
    deleteMonument.addEventListener("click", handleDelete)
    return monumentArticle;
}
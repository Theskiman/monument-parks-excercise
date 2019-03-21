let listMonuments = () => {
    getAllMonuments().then(monumentsArray => {
        console.log(monumentsArray)
        let monumentFragment = document.createDocumentFragment();

        monumentsArray.forEach(monument => {
            let monumentHTML = buildMonumentHtml(monument);
            monumentFragment.appendChild(monumentHTML);
        });

        const monumentSection = document.querySelector("#monuments");
        clearElement(monumentSection)
        monumentSection.appendChild(monumentFragment)
    });
};
const handleDom = {
    createAndFillElement:(htmlElement,text,attributes=[{}]) => {
        const elementCreated = document.createElement(htmlElement)
        if(text.length){
            const textNode = document.createTextNode(text);
            elementCreated.appendChild(textNode)
        }
        if(attributes.length){
            attributes.forEach(attribute => {
                elementCreated.setAttribute(attribute.type,attribute.name)
            })
        }
        return elementCreated
    }
}
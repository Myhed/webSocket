const handleContainerMessage = {
    appendMessage: (container,message) => {
        console.log(message)
            message = handleDom.createAndFillElement('p',message.message)
            //console.log('appendMessage: ',handleSocket.chatInfo.rootNameClass)
            //var containerMessage = document.getElementsByClassName(`${handleSocket.chatInfo.rootNameClass} container`)
            container.appendChild(message)
    }
}
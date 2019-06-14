const handleInput = {

    sendInput: () => {
        const form = document.querySelector('form')
        form.addEventListener('submit',(e) => {
            handleSocket.connexionToChannel().emit("message",e.target[0].value)
            e.target[0].value = ""
            e.preventDefault()
        },false);
    }

}
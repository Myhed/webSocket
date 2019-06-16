
const handleInput = {

    sendInput: () => {
        const form = document.querySelector('form')
        form.addEventListener('submit',(e) => {
            e.preventDefault()
            var channel = handleSocket.getSocketChannel()
            channel.emit('message', e.target[0].value)
            var containerMessage = document.getElementsByClassName(`${handleSocket.chatInfo.rootNameClass} container`)
            handleMessageUserSocket.receiveMessage(handleSocket.currentSocketChannel, containerMessage[0])
            e.target[0].value = ""
        },false);
    }

}
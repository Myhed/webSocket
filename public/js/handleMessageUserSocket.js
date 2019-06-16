const handleMessageUserSocket = {

    receiveMessage: (socket,container) => {
        console.log('receiveMessage socket: ', socket)
        console.log('receiveMessage container: ', container)
        socket.on('receiveMessage',message => {
            handleContainerMessage.appendMessage(container,message)
        })
    }
} 
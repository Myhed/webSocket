const handleSocket = {
    host: 'http://localhost:8080',
    currentChannel:'',
    currentSocketChannel: '',
    allChannel:[],
    getHost: () => {
        return handleSocket.host
    },
    setCurrentChannel: (channelName) => {
        handleSocket.currentChannel = channelName
        return handleSocket
    },
    getCurrentChannel: () => {
        return handleSocket.currentChannel
    },
    whichChannelToConnect: (channel,index) => {
        if(typeof handleSocket.allChannel[index] === "undefined"){
            console.log("ça passe par ici !", channel)
                return handleSocket.setCurrentChannel(channel.tag)
                .connexionToChannel(channel)
        }else{
            console.log('vous êtes déjà connecter voicis le chat')
            handleSocket.whichSocketChannel(handleSocket.allChannel[index].chat)
            console.log(handleSocket.getSocketChannel())
            return handleSocket.getSocketChannel()
        }
    },
    whichSocketChannel:(socketChannel) => {
        handleSocket.currentSocketChannel = socketChannel
    },
    getSocketChannel(){
        return handleSocket.currentSocketChannel
    },
    connexionToChannel: (channel) => {
            const chat = io(handleSocket.host+handleSocket.currentChannel)
            handleSocket.whichSocketChannel(chat)
            handleSocket.chatInfo = channel
            handleSocket.allChannel.push(Object.assign(channel,{chat}))
            
            return handleSocket.getSocketChannel()
    },
    numberClientInChannel: () => {
        handleSocket.currentSocketChannel.on('numberUserInChannel',data => {
            console.log(data)
        })
    }
}
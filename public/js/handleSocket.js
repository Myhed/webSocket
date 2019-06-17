const handleSocket = {
    host: 'http://localhost:8080',
    currentChannel:'',
    currentSocketChannel: '',
    allSocketChannel:[],
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
    whichChannelToConnect: (channel) => {
        if(handleSocket.allChannel.indexOf(channel.tag) === -1){
            
            console.log("ça passe par ici !", channel)
                return handleSocket.setCurrentChannel(channel.tag)
                .connexionToChannel(channel)
        }else{
            console.log('vous êtes déjà connecter voicis le chat')
            //handleSocket.getSocketChannel().emit('getAllUser')
            const channelId = handleSocket.allChannel.indexOf(channel.tag)
            console.log(handleSocket.allSocketChannel[channelId].users)
            handleSocket.whichSocketChannel(handleSocket.allSocketChannel[channelId].chat)
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
            handleSocket.getSocketChannel().emit('nameUserConnected',user.getNameUser())
            handleSocket.chatInfo = channel
            handleSocket.allChannel.push(channel.tag)
            handleSocket.allSocketChannel.push(Object.assign(channel,{chat,users:[]}))
            user.addUserToTheList(channel.name)
            console.log("name channel ",channel)
            return handleSocket.getSocketChannel()
    },
    numberClientInChannel: () => {
        handleSocket.currentSocketChannel.on('numberUserInChannel',data => {
            console.log(data)
        })
    }
}
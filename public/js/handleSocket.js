const handleSocket = {
    host: 'http://localhost:8080',
    currentChannel: '/',
    allChannel:[],
    currentChat: '',
    getHost: () => {
        return handleSocket.host
    },
    setCurrentChannel: (channelName) => {
        handleSocket.channel = channelName
        return handleSocket
    },
    getCurrentChannel: () => {
        return handleSocket.channel
    },
    whichChannelToConnect: (channel,index) => {
        if(typeof handleSocket.allChannel[index] === "undefined"){
            return handleSocket
                .setCurrentChannel(channel.tag)
                .connexionToChannel(channel)
        }else{
            console.log('vous êtes déjà connecter voicis le chat')
            handleSocket.chat = handleSocket.allChannel[index]
            return handleSocket.chat
        }
    },
    connexionToChannel: (channel = null) => {
        if(channel === null){
            return handleSocket.chat
        }
        handleSocket.chat = io(handleSocket.host+handleSocket.channel)
        handleSocket.allChannel.push(Object.assign(channel,{chat:handleSocket.chat}))
        return handleSocket
    },
    numberClientInChannel: () => {
        handleSocket.chat.on('numberUserInChannel',data => {
            console.log(data)
        })
    }
}
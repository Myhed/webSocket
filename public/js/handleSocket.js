const handleSocket = {
    host: 'http://localhost:8080',
    currentChannel: '/',
    allChannel:[],
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
            handleSocket
                .setCurrentChannel(channel.tag)
                .connexionToChannel(channel)
        }else{
            console.log('vous êtes déjà connecter voicis le chat')
            handleSocket.allChannel[index].chat.emit('click',`je click sur ${handleSocket.allChannel[index].name}`)
            return handleSocket.allChannel[index]
        }
    },
    connexionToChannel: (channel) => {
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
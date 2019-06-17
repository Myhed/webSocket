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
            console.log(handleSocket.allSocketChannel[channelId])
            handleSocket.whichSocketChannel(handleSocket.allSocketChannel[channelId].chat)
            // const users = document.querySelector("#users")
            // if(handleSocket.allChannel[handleSocket.allChannel.indexOf(channel.tag)] !== handleSocket){
            // while(users.firstChild){
            //   users.removeChild(users.firstChild)
            // }
            // }
            // handleSocket.allSocketChannel[channelId].users.forEach(user => {
            //     users.appendChild(handleDom.createAndFillElement('li',user,{type:'class',name:"user"}))
            // })
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
            handleSocket.getSocketChannel().emit('nameUserConnected',user.getNameUser())
            handleSocket.chatInfo = channel
            handleSocket.allChannel.push(channel.tag)
            handleSocket.allSocketChannel.push(Object.assign(channel,{chat,users:[]}))
            user.addUserToTheList()
            return handleSocket.getSocketChannel()
    },
    numberClientInChannel: () => {
        handleSocket.currentSocketChannel.on('numberUserInChannel',data => {
            console.log(data)
        })
    }
}


const user = {
    nameUser: '',
    
    setNameUser: (name) => {
        user.nameUser = name
    },
    getNameUser: () => {
        return user.nameUser
    },
    addUserToTheList:(channelName) => {
        handleSocket.getSocketChannel().on('nameUser', ({tag,name}) => {
            console.log(name)
            const userHtmlElement = handleDom.createAndFillElement('li',name,[{type:'class',name:'user'}])
            console.log(userHtmlElement)
            const id = handleSocket.allChannel.indexOf(tag)
            handleSocket.allSocketChannel[id].users.push(name)
            console.log("tag",tag)
            console.log("channel name", channelName)
            const listUsers = document.getElementsByClassName('users '+channelName)[0]
            console.log(listUsers)
            listUsers.appendChild(userHtmlElement)
        })
    },
    removeUserToTheList: () => {
        handleSocket.getSocketChannel().on('userDisconnected',({tag,userId}) => {
            const user = document.querySelectorAll('.user')[userId]
            console.log("le user qui a quitter est : ",user)
            const channelId = handleSocket.allChannel.indexOf(tag)
            const listUsers = document.querySelectorAll('.users')[channelId]
            console.log("zbi il ma trouver le users ?",listUsers)
            // console.log(handleSocket.allSocketChannel[channelId].users)
            // handleSocket.allSocketChannel[channelId].users.splice(userId,1)
            // console.log(handleSocket.allSocketChannel[channelId].users)
            user.parentNode.removeChild(user)

        })
    }
}
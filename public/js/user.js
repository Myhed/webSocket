

const user = {
    nameUser: '',
    
    setNameUser: (name) => {
        user.nameUser = name
    },
    getNameUser: () => {
        return user.nameUser
    },
    addUserToTheList:() => {
        handleSocket.getSocketChannel().on('nameUser', ({tag,name}) => {
            console.log(name)
            const userHtmlElement = handleDom.createAndFillElement('li',name,[{type:'class',name:'user'}])
            console.log(userHtmlElement)
            const id = handleSocket.allChannel.indexOf(tag)
            handleSocket.allSocketChannel[id].users.push(name)
            const listUsers = document.querySelector("#users")
            listUsers.appendChild(userHtmlElement)
        })
    },
    removeUserToTheList: () => {
        handleSocket.getSocketChannel().on('userDisconnected',({tag,userId}) => {
            const user = document.querySelectorAll('.user')[userId]
            const channelId = handleSocket.allChannel.indexOf(tag)
            console.log(handleSocket.allSocketChannel[channelId].users)
            handleSocket.allSocketChannel[channelId].users.splice(userId,1)
            console.log(handleSocket.allSocketChannel[channelId].users)
            user.parentNode.removeChild(user)

        })
    }
}
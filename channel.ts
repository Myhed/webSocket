import * as io from 'socket.io'
import {roomDescription} from './channel.d'

export class Channel {
    public name: string
    public tag: string
    private channel: io.Namespace
    private users = []
    private room: roomDescription[] = []

    constructor(namechannel: string, tagNameChannel: string, channel: io.Namespace){
        this.name = namechannel
        this.tag = tagNameChannel
        this.channel = channel
    }
    public connect(){
        this.channel.on('connection',(socket) => {
            socket.on('nameUserConnected',nameUser => {
                this.channel.emit('nameUser',{tag:this.tag,name: nameUser})
                this.users.push(socket)
                //console.log(this.users)
            })
            console.log(`Vous vous êtes connecet sur le channel ${this.name}`)
            socket.on('disconnect', () => {
                console.log(this.users.indexOf(socket))
                this.channel.emit('userDisconnected',{tag: this.tag,userId:this.users.indexOf(socket)})
                this.users.splice(this.users.indexOf(socket),1)
                console.log('a user is disconnected', this.users.indexOf(socket))         
            })
            socket.on('message', message => {
                console.log(`a user sended a message on ${this.name} :`, message)
                socket.emit('receiveMessage', {name:this.name,message:message})
            })
            socket.emit('numberUserInChannel', {userConnected: this.users.length})
            socket.on('click',data => {
                console.log(data);
            })
        })
    }
}
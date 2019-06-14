import * as io from 'socket.io'
import {roomDescription} from './channel.d'

export class Channel {
    public name: string
    public tag: string
    public channel: io.Namespace
    private users: io.Socket[] = []
    private room: roomDescription[] = []

    constructor(namechannel: string, tagNameChannel: string, channel: io.Namespace){
        this.name = namechannel
        this.tag = tagNameChannel
        this.channel = channel
    }
    public connect(){
        this.channel.on('connection',(socket) => {
            console.log(`Vous vous êtes connecet sur le channel ${this.name}`)
            socket.on('disconnect', () => {
                console.log('a user is disconnected')
            })
            socket.on('message',message => {
                console.log('a user sended a message: ', message)
                socket.emit('sendMessage',message)
            })
            socket.on('click',data => {
                console.log(data);
            })
        })
    }
}
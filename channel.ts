import * as io from 'socket.io'
import {roomDescription} from './channel.d'

export class Channel {
    public name: string
    public tag: string
    public channel: io.Namespace
    private users: io.Socket[]
    private room: roomDescription[]

    constructor(namechannel: string, tagNamechannel: string, channel: io.Namespace){
        this.name = namechannel
        this.tag = tagNamechannel
        this.channel = channel
    }
    public connect(){
        this.channel.on('connection',(socket) => {
            console.log(`Vous vous êtes connecet sur le channel ${this.name}`)
        })
    }
}
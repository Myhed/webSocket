import * as express from 'express'
import * as io from 'socket.io'
import * as http from 'http'
import * as path from 'path'
import {Channel} from './channel'
import {channelDescription} from './channel.d'
const app = express();
const server = new http.Server(app)
const chat = io(server)

const channelsDescriptions: channelDescription[] = [ {name:'League of legend',tag:'/'},
{name:'PUBG',tag:'/PUBG'},
{name:'Fortnite',tag:'/Fortnite'}]

const channels: Channel[] = channelsDescriptions.map((channelDescription,index) => new Channel(channelDescription.name,channelDescription.tag,chat.of(channelDescription.tag)))

channels.forEach(channel => {
    channel.connect()
})

app.use(express.static(path.join(__dirname, '/public')))

app.get('/getAllchannel', (req,res) => {
    res.send(JSON.stringify(channelsDescriptions))
})
app.get('/',(req,res) => {
    res.sendFile(__dirname + "/views/index.html")
})


server.listen(8080, () => {
    console.log('server started')
})
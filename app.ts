import * as express from 'express'
import * as io from 'socket.io'
import * as http from 'http'
import * as path from 'path'

const app = express();
const server = new http.Server(app)
const chat = io(server)
const rooms: String[] = ['general','divers','jeux']

app.use(express.static(path.join(__dirname, '/public')))

app.get('/getAllRoom',(req,res) => {
    res.send(JSON.stringify(rooms))
})
app.get('/',(req,res) => {
    res.sendFile(__dirname + "/views/index.html")
})


server.listen(8080, () => {
    console.log('server started')
})
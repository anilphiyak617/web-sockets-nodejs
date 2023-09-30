import { stringify } from 'querystring';
import WebSocket from 'ws'

const PORT = 5001;
const server = new WebSocket.Server({ port: PORT })
console.log('Socket Listening on port 5001')

server.on('connection', (socket) => {
    
    socket.on('message', (message) => {
        console.log(message.toLocaleString())
    })
    socket.on('close', () => { 'Connection closed' })
    socket.send('Hi there')
})

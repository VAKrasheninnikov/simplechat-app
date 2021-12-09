const express = require('express')

const app = express()
const server = require('http').Server(app)
const io = require('socket.io')(server, {
    cors: {
        origin: '*'
    }
});

app.use(express.json());

const rooms = new Map([

]);

app.get('/rooms', (req, res) => {
    rooms.set('hello', '');
    res.json(rooms);
})

app.post('/rooms', (req, res)=>{
    const {roomId, userName} = req.body
    if(!rooms.has(roomId)) {
        rooms.set(roomId, new Map([
            ['users', new Map()],
            ['messages', []],
        ]))
    }
    res.send()
})

io.on('connection', socket => {
   socket.on('ROOM:JOIN', (data)=>{
       console.log(data)
   })
})

server.listen(9999, (err)=>{
    if (err) {
        throw Error (err);
    }
    console.log('server running!')
});
const express = require("express")
const app = express()
const PORT = process.env.PORT || 8050
const cors = require("cors")
const dotenv = require("dotenv")
const userRoute = require("./routes/user")
const socket = require('socket.io');
app.use(cors())
app.use(express.json())
dotenv.config()

// db 
require("./db/connection")

// routes 

app.use('/user', userRoute)

app.get('/', (req, res) => {
    res.send('Hello')
})

// socket connection 


const server = app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`)
})
// Set up socket.io
const io = socket(server,{
    origin : "http://localhost:3000"
});
io.on('connection', (socket) => {
    // add new user 
    console.log(socket)
    socket.on('add', data => socket.broadcast.emit('add', data))
})




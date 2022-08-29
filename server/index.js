const httpServer = require("http").createServer()
const { Server } = require("socket.io")

const io = new Server(httpServer, {
    cors: {
        origin: "http://localhost:8080"
    }
})

io.use((socket, next) => {
    const { username } = socket.handshake.auth
    if (!username) {
        next(new Error("Invalid username"))
    }
    socket.username = username
    next()
})

io.on("connection", (socket) => {
    const username = socket.username
    console.log("new connection: ", username)

    // Get all connected users
    const users = []
    for (let [id, socket] of io.of("/").sockets) {
        users.push({
            userId: id,
            username: socket.username
        })
    }

    socket.emit("users", users)
    socket.on("move", console.log)
    // Limit the number of connections to two.
    if (users.length > 2) {
        
    }


})


io.on("disconnect", (socket) => {
    console.log(socket.username + " has disconnected")
})


const PORT = process.env.PORT || 3000
httpServer.listen(PORT,  ()=> {
    console.log(`server running on localhost:${PORT}`)
})
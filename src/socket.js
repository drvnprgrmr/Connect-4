const io  = require("socket.io-client")

const url = "http://localhost:3000"

const socket = io(url, {
    autoConnect: false
})


socket.onAny((event, ...args)=> {
    console.log("An event occured: ")
    console.log(event, ...args)
})


socket.on("move", (color) => {
    console.log(color)
})



module.exports = socket
import { io } from "https://cdn.socket.io/4.3.2/socket.io.esm.min.js"

const url = "http://localhost:3000"

const socket = io(url)


socket.onAny((event, ...args)=> {
    console.log("An event occured: ")
    console.log(event, ...args)
})


socket.on("move", (color) => {
    console.log(color)
})



export default socket
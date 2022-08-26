const express = require("express")
const bodyParser = require("body-parser")
const path = require("path")

const app = express()

const socket = require("./socket")
const PORT = 8080


app.use("/public", express.static(path.join(__dirname, "..", "public")))
app.use(bodyParser.urlencoded({extended: true}))

  

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/views/new-player.html")
    
})

app.get("/index",  (req, res) => {
    res.sendFile(__dirname + "/views/index.html")
})

app.post("/new-player", (req, res) => {
    console.log(req.body)
    const username = req.body.username
    socket.auth = {username}
    socket.connect()
    res.redirect("/index")
})


app.listen(PORT, ()=> {
    console.log("App is listening on http://localhost:8080")
})
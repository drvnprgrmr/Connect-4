const express = require("express")
const bodyParser = require("body-parser")
const path = require("path")
const url = require("url")
const app = express()

const PORT = 8080


app.set("views", "./views")
app.set("view engine", "ejs")

app.use(express.static(__dirname))
app.use("/public", express.static(path.join(__dirname, "..", "public")))
app.use(bodyParser.urlencoded({extended: true}))



app.get("/", (req, res) => {
    res.render("new-player")
    
})

app.get("/index",  (req, res) => {
    const username = req.query.username
    console.log(req.body)
    
    console.log(username)
    if (username) {
        res.render("index")
    } else {
        res.redirect("/")
    }
    
})

app.post("/new-player", (req, res) => {
    const username = req.body.username

    res.redirect(url.format({
        pathname: "/index",
        query: {
            username: username
        }
    }))
})


app.listen(PORT, ()=> {
    console.log("App is listening on http://localhost:8080")
})
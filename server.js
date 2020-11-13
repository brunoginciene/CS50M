const express = require("express")

const app = express()

app.use(express.static('public/project0'))

app.get("/", (req, res) =>{
    res.sendFile("index.html")
})

app.listen(3000)
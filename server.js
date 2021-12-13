const express = require('express')
const app = express()
const db = require()('TOCE.db')

app.use(express.static("public"))
app.use(express.json())

app.listen(3000, () => {
    console.log("egg")
})
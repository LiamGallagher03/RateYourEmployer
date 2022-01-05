const express = require('express')
const app = new express()
const db = require('better-sqlite3')('database.db')

app.use(express.static('./client/build'))
app.use(express.json())

app.get('/reviews',(req, res) => {
    const query = db.prepare("SELECT * FROM reviewList")
    const reviews = query.all()
    res.json({
        reviews
    })
})

app.listen(8080,() => {
    console.log("server started")
})
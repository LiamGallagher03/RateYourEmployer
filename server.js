const express = require('express')
const app = new express()
const db = require('better-sqlite3')('SICC.db')

app.use(express.static("public"))
app.use(express.json())

app.get('/events', (req, res) => {
    const query = db.prepare("SELECT * FROM Events")
    const events = query.all()
    res.json({
        events
    })
})

app.get('/users', (req, res) => {
    const query = db.prepare("SELECT * FROM Users")
    const users = query.all()
    res.json({
        users
    })
})

app.post('/register', (req, res) => {
    const {username, password, firstname, lastname} = req.body
    const query = db.prepare(`INSERT INTO Users (username, password, firstname, lastname, isAdmin) values (?, ?, ?, ?, ?)`)
    const register = query.run(username,password,firstname,lastname,0)
    res.json ({
        register
    })
})

app.post('/login', (req, res) => {
    const {username, password} = req.body
    const query = db.prepare(`SELECT * FROM Users WHERE username=? AND password=?`)
    const login = query.all(username,password)
    let isValid = false;
    if (login.length > 0) {
        isValid = true;
    }
    res.send(isValid);
    if (isValid) console.log("egggs you pass")
});

app.listen(8080, () => {
    console.log("egg")
})
const express = require('express')
const app = new express()
const db = require('better-sqlite3')('database.db')

app.use(express.static("public"))

app.get("/#homePage", (req, res) => {

})

app.get("/#search", (req, res) => {
    
})

app.get("/#addLocation", (req, res) => {

})

app.get("/#help", (req, res) => {
    
})
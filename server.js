const express = require('express')
const app = new express()
const db = require('better-sqlite3')('database.db')

app.use(express.static("public"))


    
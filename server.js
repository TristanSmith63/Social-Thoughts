const express = require('express')
const colors = require('colors')
const apiRoutes = require('./routes/index')

const db = require('./config/connection')

const PORT = process.env.PORT || 3001
const app = express()

app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use('/api', apiRoutes)

db.once('open', () =>{
	app.listen(PORT, () =>{
		console.log(`Welcome, http://localhost:${PORT} will be your server today!`.cyan)
	})
})
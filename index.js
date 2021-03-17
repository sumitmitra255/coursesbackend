const express = require('express')
const cors = require('cors')
const app = express()
const configureDB = require('./config/database')
configureDB()
const routes = require('./config/routes')
const port = process.env.PORT || 3050

app.use(express.json())
app.use(cors())
app.use('/', routes)
app.use('/uploads', express.static('uploads'))
app.listen(port, () => {
	console.log('listening on port', port)
})

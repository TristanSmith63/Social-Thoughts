const mongoose = require('mongoose')

const connectionString = 'mongodb://localhost/thoughtSpace'

mongoose.connect(connectionString)

module.exports = mongoose.connection
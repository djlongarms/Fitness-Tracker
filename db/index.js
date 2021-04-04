const mongoose = require('mongoose')

const db = mongoose.connect('mongodb://localhost/workout', { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })

module.exports = db
const { model, Schema } = require('mongoose')

module.exports = model('Exercise', new Schema({
  type: String,
  name: String,
  distance: Number,
  duration: Number,
  weight: Number,
  reps: Number,
  sets: Number
}))
const { model, Schema } = require('mongoose')

module.exports = model('Exercise', new Schema({
  _id: Schema.Types.ObjectId,
  type: String,
  name: String,
  distance: Number,
  duration: Number,
  weights: Number,
  reps: Number,
  sets: Number
}))
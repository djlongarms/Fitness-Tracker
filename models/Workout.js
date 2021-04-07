const { model, Schema } = require('mongoose')

module.exports = model('Workout', new Schema({
  day: {
    type: Date,
    default: Date.now
  },
  exercises: [
    {
      type: String,
      name: String,
      duration: Number,
      weights: Number,
      reps: Number,
      sets: Number
    }
  ]
}))

const { model, Schema } = require('mongoose')

module.exports = model('Workout', new Schema({
  day: {
    type: Date,
    default: Date.now
  },
  exercises: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Exercise'
    }
  ],
  totalDuration: {
    type: Number,
    default: 0
  }
}))

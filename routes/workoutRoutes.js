const router = require('express').Router()
const { Workout } = require('../models')

router.get('/workouts', (req, res) => {
  Workout.find()
    .then(workouts => res.json(workouts))
    .catch(err => console.err)
})

router.post('/workouts', (req, res) => {
  Workout.create(req.body)
  .then(workout => res.json(workout))
  .catch(err => console.error(err))
})

router.put('/workouts/:id', (req, res) => {
  Workout.findByIdAndUpdate(req.params.id, req.body)
    .then(workouts => res.json(workouts))
    .catch(err => console.err)
})

module.exports = router
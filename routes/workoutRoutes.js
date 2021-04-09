const router = require('express').Router()
const { Workout, Exercise } = require('../models')

router.get('/workouts/range', (req, res) => {
  Workout.find({})
    .populate({
      path: 'exercises',
      model: 'Exercise'
    })
    .then(workouts => res.json(workouts))
    .catch(err => console.log(err))
})

router.get('/workouts', (req, res) => {
  Workout.find({})
    .populate({
      path: 'exercises',
      model: 'Exercise'
    })
    .then(workouts => res.json(workouts))
    .catch(err => console.log(err))
})

router.post('/workouts', (req, res) => {
  Workout.create(req.body)
    .then(workout => res.json(workout))
    .catch(err => console.error(err))
})

router.put('/workouts/:id', (req, res) => {
  Exercise.create(req.body)
    .then(exercise => {
      Workout.findByIdAndUpdate({ _id: req.params.id }, {
        $push: {
          exercises: exercise._id
        }
      })
        .then(workout => {
          Workout.findByIdAndUpdate({ _id: req.params.id }, {
            totalDuration: workout.totalDuration + exercise.duration
          })
            .then(workout1 => res.json(workout1))
            .catch(err => console.log(err))
        })
        .catch(err => console.error(err))
    })
    .catch(err => console.log(err))
})

module.exports = router
const Exercise = require('../models/exercises.model');

const exercise_index = (req, res) => {
    Exercise.find()
        .then(result => res.json(result))
        .catch(err => console.log(err))
}

const exercise_create = (req, res) => {
    const exercise = new Exercise({
        username: req.body.username,
        description: req.body.description,
        duration: Number(req.body.duration),
        date: Date.parse(req.body.date),
    })

    exercise.save()
        .then(() => res.json('Exercise Added'))
        .catch(err => console.log(err))
}

const exercise_get = (req, res) => {
    const id = req.params.id;
    Exercise.findById(id)
        .then(result => res.json(result))
        .catch(err => console.log(err))
}

const exercise_delete = (req, res) => {
    const id = req.params.id;
    Exercise.findByIdAndDelete(id)
        .then(() => res.json('Exercise Deleted'))
        .catch(err => console.log(err))
}

const exercise_update = (req, res) => {
    const id = req.params.id;
    Exercise.findById(id)
        .then(result => {
            result.username = req.body.username
            result.description = req.body.description
            result.duration = Number(req.body.duration)
            result.date = Date.parse(req.body.date)

            result.save()
                .then(() => res.json('Exercise Updated!'))
                .catch(err => console.log(err))
        })
        .catch(err => console.log(err))
}

module.exports = {
    exercise_index,
    exercise_create,
    exercise_get,
    exercise_delete,
    exercise_update
}

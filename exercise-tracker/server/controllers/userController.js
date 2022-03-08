const User = require('../models/users.model');

const user_index = (req, res) => {
    User.find()
        .then(result => res.json(result))
        .catch(err => console.log(err.message))
}

const user_create = (req, res) => {
    const username = req.body.username;
    const user = new User({ username });
    user.save()
        .then(() => res.json('User added!'))
        .catch(err => console.log(err))
}

module.exports = {
    user_index,
    user_create
}
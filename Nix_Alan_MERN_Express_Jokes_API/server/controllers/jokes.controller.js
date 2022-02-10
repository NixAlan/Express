const Joke = require("../models/jokes.model");

module.exports = {
  createNewJoke: (req, res) => {
    Joke.create(req.body)
      .then((newJoke) => {
        console.log(newJoke);
        res.json(newJoke);
      })
      .catch((err) => console.log(err));
  },

  findAllJokes: (req, res) => {
    Joke.find({})
      .then((allJokes) => {
        console.log(allJokes);
        res.json(allJokes);
      })
      .catch((err) => console.log(err));
  },

  findOneSingleJoke: (req, res) => {
    Joke.findOne({
      _id: req.params.id,
    })
      .then((oneJoke) => {
        console.log(oneJoke);
        console.log(oneJoke);
        res.json(oneJoke);
      })
      .catch((err) => console.log(err));
  },

  updateJoke: (req, res) => {
    Joke.findOneAndUpdate({ _id: req.params.id }, req.body)
      .then((updateJoke) => res.json(updateJoke))
      .catch((err) => console.log(err));
  },

  deleteJoke: (req, res) => {
    Joke.deleteOne({ _id: req.params.id })
      .then((deleteJoke) => {
        console.log(deleteJoke);
        res.json(deleteJoke);
      })
      .catch((err) => console.log(err));
  },
};

const JokeController = require("../controllers/jokes.controller");
const Joke = require("../models/jokes.model");

module.exports = (app) => {
  console.log(JokeController);
  app.post("/api/jokes", JokeController.createNewJoke);
  app.get("/api/jokes", JokeController.findAllJokes);
  app.get("/api/jokes/:id", JokeController.findOneSingleJoke);
  app.put("/api/jokes/:id", JokeController.updateJoke);
  app.delete("/api/jokes/:id", JokeController.deleteJoke);
};

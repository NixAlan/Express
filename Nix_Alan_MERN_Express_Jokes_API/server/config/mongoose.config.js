const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost/jokes_db", {
    usenewURLParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("established a connection to the database"))
  .catch((err) => console.log("you are not connected to the database"));

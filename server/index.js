/* eslint-disable quotes */
const express = require("express");
const morgan = require("morgan");
const path = require("path");
const db = require("../database/index.js");
const Users = require("../database/users.js");
const app = express();
const http = require("http");
const server = http.createServer(app);
const io = require("socket.io")(server);

// var cors = require("cors");
const port = 3008;

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(cors());
app.use(express.static(path.resolve(__dirname + "/../client/public")));

//// GET ////////////////////////
app.get("/users", (req, res) => {
  // console.log(req.body);
  Users.find({})
    .then((data) => {
      // console.log(res);
      res.send(data);
    })
    .catch((err) => console.log(err));
});

//// POST ////////////////////////
app.post("/users", (req, res) => {
  Users.create(req.body)
    .then(() => {
      res.send("User Info Posted");
    })
    .catch((error) => console.log(error));
});

//// PUT ////////////////////////////
app.put("/users/:id", (req, res) => {
  var id = req.params.id;
  var time = req.body.topTime;
  Users.updateOne({ id: id }, { topTime: time }, (err, result) => {
    if (err) {
      console.log("Error updating reviews", err);
    }
    res.status(200).json(result);
  });
});

//// DELETE ////////////////////////
app.delete("/users", (req, res) => {
  var name = req.body.userName;
  Users.deleteOne({ userName: name })
    .then(() => {
      res.status(200).send("User deleted");
    })
    .catch((err) => console.log(err));
});

server.listen(3001, () =>
  console.log(`App listening at http://localhost:3001`)
);

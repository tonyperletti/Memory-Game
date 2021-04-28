/* eslint-disable quotes */
const express = require("express");
const morgan = require("morgan");
const path = require("path");
const db = require("../database/index.js");
const Players = require("../database/players.js");
const ChatBox = require("../database2/chatBox.js");
const app = express();
const cors = require("cors");

const port = 3008;

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.resolve(__dirname + "/../client/public")));
app.use(cors());

//// GET CHAT MESSAGE //////////////////////////////////////////////////
app.get("/chatBox/", (req, res) => {
  // console.log(req);
  ChatBox.find({})
    .then((data) => {
      console.log(data);
      res.send(data);
    })
    .catch((err) => console.log(err));
});

//// CHAT MESSAGE POST //////////////////////////////////////////////////
app.post("/chatBox", (req, res) => {
  console.log(req.body);
  ChatBox.create(req.body)
    .then(() => {
      res.send("Chat Message Posted");
    })
    .catch((error) => console.log(error));
});

//// GET PLAYER /////////////////////////////////////////////
app.get("/players/", (req, res) => {
  // console.log(req.body);
  Players.find({})
    .then((data) => {
      // console.log(res);
      res.send(data);
    })
    .catch((err) => console.log(err));
});

//// PLAYER POST ////////////////////////////////////////////
app.post("/players/", (req, res) => {
  Players.create(req.body)
    .then(() => {
      res.send("User Info Posted");
    })
    .catch((error) => console.log(error));
});

//// PUT ///////////////////////////////////////////////////
app.put("/players/:id", (req, res) => {
  var id = req.params.id;
  var time = req.body.topTime;
  Players.updateOne({ id: id }, { topTime: time }, (err, result) => {
    if (err) {
      console.log("Error updating reviews", err);
    }
    res.status(200).json(result);
  });
});

//// DELETE //////////////////////////////////////////////
app.delete("/players/", (req, res) => {
  var name = req.body.userName;
  Players.deleteOne({ userName: name })
    .then(() => {
      res.status(200).send("Player deleted");
    })
    .catch((err) => console.log(err));
});

app.listen(3001, () => console.log(`App listening at http://localhost:3001`));

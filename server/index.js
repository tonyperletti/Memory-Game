const express = require('express');
const morgan = require('morgan');
const path = require('path');
const db = require('../database/index.js');
const Users = require('../database/users.js');
var cors = require('cors');


const app = express();
const port = 3008;

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(express.static(path.resolve(__dirname + '/../client/public')));

app.get('/users', (req, res) => {
  console.log(req);
  Users.find({})
    .then((data) => {
      res.send(data);
    })
    .catch(err => console.log(err));
});

app.post('/users', (req, res) => {
  Users.create(req.body)
    .then(() => {
      res.send('User Info Posted');
    })
    .catch(error => console.log(error));
});

app.listen(port, () => console.log(`App listening at http://localhost:${port}`));

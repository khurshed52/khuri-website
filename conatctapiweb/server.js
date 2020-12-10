const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
app.use(cors());
const port = process.env.PORT || 4000;
require('dotenv').config()

const routes = require('./routes/routes');

const db = process.env.mongoURI;

// promise 
mongoose.Promise = global.Promise;

// connect data base
mongoose.connect(db, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true, useFindAndModify: false });

mongoose.connection
  .once("open", function () {
    console.log("DB Connected!");
  })
  .on("error", function (error) {
    console.log("Error is: ", error);
  });
  
app.use(express.json());
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({extended: 'false'})); 
app.use(routes);


app.get('/', (req, res) => res.status(200).send('Hello khurshed backend test') );

app.listen(port, () => console.log(`Example app listening on port ${port}`))

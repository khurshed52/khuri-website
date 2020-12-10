const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
app.use(express.json());
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({extended: 'false'})); 
const routes = require('./routes/routes');
const cors = require('cors');
app.use(cors());
const port = process.env.PORT || 4000;

const db = 'mongodb+srv://khurshed:UJbtVBah525eoUYy@khuri.vxt0r.mongodb.net/User?retryWrites=true&w=majority';
// promise 
mongoose.Promise = global.Promise;

// connect data base
mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true }, (err)=> {
    if(!err){
        console.log('connected to data base')
    }else{
        console.log('error to connect')
    }
});




app.use(routes);


app.get('/', (req, res) => res.status(200).send('Hello khurshed backend test') );

app.listen(port, () => console.log(`Example app listening on port ${port}`))

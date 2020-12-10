const express = require('express');
const router = express.Router();
const multer = require('multer');
var path = require('path');
const Contact = require('../models/Contact');
const Image = require('../models/Image');

// Save file to server storage
var Storage = multer.diskStorage({
    destination:"./uploads/",
    filename:(req,file,cb)=>{
      cb(null,Date.now()+path.extname(file.originalname));
    }
  });

  var upload = multer({storage:Storage, limits : {fileSize : 1000000}}).single('document');


// get contact api
router.get('/contact', (req, res)=> {
    Contact.find((err, data)=> {
        if(err) {
            res.status(500).send(err)   
        }
        else {
            res.status(200).send(data)
        }
    })
});

// post api data 
router.post('/contact', (req, res)=> {
    const contactCard = req.body

    Contact.create(contactCard, (err, data)=> {
        if(err) {
            res.status(500).send(err)
        }
        else {
            res.status(201).send(data)
        }
    })
});


// get api image
router.get('/image', (req, res)=> {
    Image.find((err, data)=> {
        if(err) {
            res.status(500).send(err)
        }else {
            res.status(200).send(data)
        }
    })
})
// post api image

router.post('/image', upload , (req, res, next)=> {
    const file = new Image({
        name: req.body.name,
        filename:req.file.filename
    });
    Image.create(file, (err, gallery)=> {
        if(err) {
            res.status(500).send(err)
        }else {
            res.status(201).send(gallery)
        }
    })
});

module.exports = router
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const User = require('../models/user');
const db = 'mongodb+srv://User_Justin:User_Justin@justinj-6njuj.gcp.mongodb.net/eventdb?retryWrites=true&w=majority';

mongoose.connect(db, (err)=>{
    if(err){
        console.error('Error! '+ err)
    } else{
        console.log('Connected to MongoDB')
    }
});

function verifyToken(req,res,next){
    if(!req.headers.authorization){
        return res.status(401).send('Unauthorized request')
    }
    let token = req.headers.authorization.split(' ')[1];
    // console.log(token);
    if(token === 'null'){
        return req.status(401).send('Unauthorized request')
    }
    let payload = jwt.verify(token, 'secretKey')
    if (!payload){
        return res.status(401).send('Unauthorized request')
    }
    req.userId = payload.subject
    next()
}

router.get('/events',(req,res)=>{
    let events = [
        {
            "_id": "1",
            "name": "Auto Expo",
            "description": "lorem ipsum",
            "date": "2012-04-23T18:25:43.511Z"
        },
        {
            "_id": "2",
            "name": "Auto Expo",
            "description": "lorem ipsum",
            "date": "2012-05-23T18:25:43.511Z"
        },
        {
            "_id": "3",
            "name": "Auto Expo",
            "description": "lorem ipsum",
            "date": "2012-06-23T18:25:43.511Z"
        }
    ]
    res.json(events)
})

router.get('/special',verifyToken,(req,res)=>{
    let events = [
        {
            "_id": "1",
            "name": "Auto Expo Special",
            "description": "lorem ipsum",
            "date": "2012-04-23T18:25:43.511Z"
        },
        {
            "_id": "2",
            "name": "Auto Expo Special",
            "description": "lorem ipsum",
            "date": "2012-05-23T18:25:43.511Z"
        },
        {
            "_id": "3",
            "name": "Auto Expo Special",
            "description": "lorem ipsum",
            "date": "2012-06-23T18:25:43.511Z"
        }
    ]
    res.json(events)
})

router.post('/register',(req,res)=>{
    let userData = req.body;
    let user = new User(userData);
    user.save((err, registeredUser)=>{
        if(err){
            console.log(err)
        } else{
            let payload = {subject: user._id}
            let token = jwt.sign(payload,'secretKey')
            res.status(200).send({token})
        }
    })
})

router.post('/login',(req,res)=>{
    let userData = req.body
    User.findOne({email:userData.email}, (err, user)=>{
        if (err){
            console.log(err)
        } else{
            if (!user){
                res.status(401).send('Invalid Email')
            } else{
                if( user.password !== userData.password){
                    res.status(401).send('Invalid')
                } else{
                    let payload = {subject: user._id}
                    let token = jwt.sign(payload,'secretKey')
                    res.status(200).send({token})
                }
            }
        }
    })
})

router.get('/',(req,res)=>{
    res.send('From Api')
});

module.exports = router;
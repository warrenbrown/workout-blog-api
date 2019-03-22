const express = require('express');
const router = express.Router();
const Exercise = require('../models/exercise');

router.get("/", (req, res) => {
  res.send("Welcome to the Workout app Api");
});

router.get('/exercises', (req, res) => {
    Exercise.find({}, function(err, exercises) {
        if(err) {
            console.log('Error ,retrieving exercises', err)
        } else {
            res.json(exercises);
        }
    })
})

router.post('/exercises/new', (req, res) => {
    console.log("Creating exercise.....");
    Exercise.create(req.body, function(err, exercise) {
        if(err) {
            if(!req.body.title) {
                console.log(err)
                return res.json({ success: false, msg: 'Can not create exercise. Title is required' });
            }

            return res.json({ success: false, msg: 'Exercise not created.  Reps is required.'})
        } else {
            res.json({ success: true, msg: 'Exercise created.', exercise });
        }
    });
});

router.get('/exercises/:id', (req, res) => {
    Exercise.findById(req.params.id, function(err, exercise) {
        if(err) {
            res.json({ success: false, msg: 'Invalid user name or id' })
            console.log(err);
        } else {
            res.json({ success: true, msg: 'exercises found', exercise });
        }
    });
});

router.put('/exercises/edit/:id', (req, res) => {
    Exercise.findByIdAndUpdate(req.params.id, req.body, function(err, exercise) {
        if (err) {
            console.log(err)
        } else {
            res.json({ success: true, msg: 'Exercise has been updated.', exercise });
        }
    });
});

router.delete('/exercises/delete/:id', (req, res) => {
    Exercise.findByIdAndDelete(req.params.id, function(err, exercise) {
        if(err) {
            console.log(err)
        }
        res.json('Exercise has been deleted.')
    });
});

module.exports = router;
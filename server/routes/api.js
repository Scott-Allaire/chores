var express = require('express');
var router = express.Router();

// Models
var Chore = require('../models/chore');
var Event = require('../models/event');

// Routes
// Chore.methods(['get','put','post','delete']);
// Chore.register(router, '/chores');
router.route('/chores')
    .get(function (req, res) {
        Chore.find()
            .sort({ name: 1 })
            .exec(function (err, chores) {
                if (err)
                    res.send(err);

                res.json(chores);
            });
    })
    .post(function (req, res) {

        var chore = new Chore();
        chore.name = req.body.name;
        chore.description = req.body.description;
        chore.frequency = req.body.frequency;
        chore.nextDue = req.body.nextDue;

        Chore.create(chore, function (err, chore) {
            if (err)
                res.send(err);

            res.json(chore);
        });

    });

router.route('/chores/:chore_id')
    .get(function (req, res) {
        Chore.findById(req.params.chore_id, function (err, chore) {
            if (err)
                res.send(err);
            res.json(chore);
        });
    })
    .put(function (req, res) {
        Chore.findById(req.params.chore_id, function (err, chore) {

            if (err)
                res.send(err);

            chore.name = req.body.name;
            chore.description = req.body.description;
            chore.frequency = req.body.frequency;
            chore.nextDue = req.body.nextDue;

            // save the bear
            chore.save(function (err) {
                if (err)
                    res.send(err);

                res.json(chore);
            });

        });
    })
    .delete(function (req, res) {
        Chore.remove({
            _id: req.params.chore_id
        }, function (err, chore) {
            if (err)
                res.send(err);

            res.json(chore);
        });
    });

Event.methods(['get', 'put', 'post', 'delete']);
Event.register(router, '/events');

// Return router
module.exports = router;
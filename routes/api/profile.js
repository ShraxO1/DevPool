const express = require('express');
const router = express.Router();
const passport = require('passport');
const mongoose = require('mongoose');

//Load profile model
const Profile = require('../../models/Profile');

//Load user model
const User = require('../../models/User');

router.get('/test', (req, res) => res.json({msg: 'Profile Works'}));

//@route GET api/profile
//@desc get cuurent user profile
//@access private
router.get('/', passport.authenticate('jwt', { session: false }), (req,res) => {
    const errors = {};

    Profile.findOne({ user: req.user.id })
        .then( profile => {
            if(!profile){
                errors.noprofile = 'There is no user profile';
                return res.status(400).json(errors);
            }
            res.json(profile);
        })
        .catch(err => res.status(404).json(err));
});

module.exports = router;
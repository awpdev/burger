const express = require("express");
const router = express.Router();

const burger = require("../models/burger.js");

router.get('/', (req, res) => {
  burger.getAll((burgers) => {
    res.render('index', { burgers })
  })
});

router.post('/api/burger/new', (req, res) => {
  burger.addBurger(req.body.burgerName, () => {
    res.redirect('back');
  })
});

router.post('/api/burger/devoured', (req, res) => {
  burger.devourBurger(req.body.devoured, () => {
    res.redirect('back');
  })
})

module.exports = router;
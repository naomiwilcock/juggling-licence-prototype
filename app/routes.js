var express = require('express')
var router = express.Router()

// Route index page
router.get('/', function (req, res) {
  res.render('index')
})

// add your routes here
router.post('/juggling-balls-answer', function (req, res) {
  //make a variable and give it a value from 'juggling-balls'
  var jugglingBalls = req.session.data ['juggling-balls']
  //check whether the variable matches a condition
  if (jugglingBalls == "3 or more") {
    //send user to next page
    res.redirect ('/juggling-trick')
  } else {
    //send user to ineligible pages
    res.redirect ('/ineligible')
  }
})

router.post('/juggling-equipment-answer', function (req, res) {
  //make a variable and give it a value from 'juggling-equipment'
  var jugglingEquipment = req.session.data ['juggling-equipment']
  //check whether the variable matches a condition
  if (jugglingEquipment == "Batons") {
    //send user to next page
    res.redirect ('/separate-licence')
  } else {
    //send user to ineligible pages
    res.redirect ('/check-your-answers')
  }
})

module.exports = router

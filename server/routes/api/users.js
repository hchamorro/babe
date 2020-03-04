const router = require('express').Router();
const isAuthenticated = require('../../config/isAuthenticated');
const auth = require('../../config/auth');
const usersController = require('../../controllers/userControllers');
const db = require('../../models');
// LOGIN ROUTE
router.route('/login').post((req, res) => {
  auth
    .logUserIn(req.body.email, req.body.password)
    .then(dbUser => res.json(dbUser))
    .catch(err => res.status(400).json(err));
});

// SIGNUP ROUTE
router.route('/signup').post((req, res) => {
  usersController.signUp(req, res);
});

//update route
router.route('/update/:id').put((req, res) => {
  console.log(req.params.id);
  // db.User.findById(req.params.id).then(data => {
  //   console.log("did stuff")
  //   console.log(data);
  // })
  db.User.updateOne(
    { _id: req.params.id },
    //change push to only one string then maybe a req.body
    { $push: { cart: '5e5182070fa3d46f40e0486e' } }
  )
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
});

// Any route with isAuthenticated is protected and you need a valid token
// to access
router.route('/:id').get(isAuthenticated, (req, res) => {
  db.User.findById(req.params.id)
    .then(data => {
      if (data) {
        res.json(data);
      } else {
        res.status(404).send({ success: false, message: 'No user found' });
      }
    })
    .catch(err => res.status(400).send(err));
});

module.exports = router;

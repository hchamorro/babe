const router = require('express').Router();
const isAuthenticated = require('../../config/isAuthenticated');
const auth = require('../../config/auth');
const usersController = require('../../controllers/userControllers');

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

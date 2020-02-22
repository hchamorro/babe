const db = require('../models');

module.exports = {
  signUp: function(req, res) {
    console.log(req.body);
    db.User.create(req.body)
      .then(data => res.json(data))
      .catch(err => {
        console.log(err);
        res.status(400).json(err);
      });
  }
};

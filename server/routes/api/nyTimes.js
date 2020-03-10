const router = require('express').Router();
const nyTimesController = require('../../controllers/nyTimesController');

router.route('/womenshealth').get(nyTimesController.findWomensHealth);
router.route('/women&science').get(nyTimesController.findWomenScience);

module.exports = router;

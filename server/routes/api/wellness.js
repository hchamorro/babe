const router = require('express').Router();
const wellnessController = require("../../controllers/wellnessController");

// Matches with "/api/wellness"
router
    .route('/')
    .get(wellnessController.findAll)
    .post(wellnessController.create);

// Matches with "/api/wellness/:id"
router
    .route('/:id')
    .get(wellnessController.findById)
    .put(wellnessController.update)
    .delete(wellnessController.remove);

module.exports = router;
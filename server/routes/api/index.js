const router = require('express').Router();
const productRoutes = require('./products');
const userRoutes = require('./users');
const wellnessRoutes = require('./wellness');
const newsRoutes = require('./news');

// Post routes
router.use('/products', productRoutes);
router.use('/users', userRoutes);
router.use('/wellness', wellnessRoutes);
router.use('/news', newsRoutes);

module.exports = router;

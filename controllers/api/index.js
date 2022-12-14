const router = require('express').Router();
const userRoutes = require('./userRoutes');
const reviewRoutes = require('./reviewRoutes');
const restaurantRoutes = require('./restaurantRoutes');

router.use('/users', userRoutes);
router.use('/restaurant', restaurantRoutes);
router.use('/reviews', reviewRoutes);

module.exports = router;

const sequelize = require('../config/connection');
const { User } = require('../models');

const userData = require('./userData.json');
const seedReviews = require('./reviewData');
const seedRestaurants = require('./restaurantData');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  // for (const restaurant of restaurantData) {
  await seedRestaurants();
  // }
  // for (const review of reviewData) {
  await seedReviews();
  // }

  process.exit(0);
};

seedDatabase();

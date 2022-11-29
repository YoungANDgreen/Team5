const sequelize = require('../config/connection');
const { User, Review, Restaurant } = require('../models');

const userData = require('./userData.json');
const reviewData = require('./reviewData.json');
const restaurantData = require('./restaurantData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });  
  for (const restaurant of restaurantData) {
    await Restaurant.create({
      ...restaurant,
    })
  };
  for (const review of reviewData) {
      await Review.create({
        ...review,
      });
  }

  process.exit(0);
};

seedDatabase();

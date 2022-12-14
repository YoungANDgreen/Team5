const { Review } = require('../models');

const reviewData = [
  {
    title: 'Delicious food',
    description:
      "This restaruant has a simple but delicious menu that leaves you inspired by the chefs' talents.",
    date_created: 'November 24, 2022',
    service: 'Service was incredible would rate 5/5.',
    taste: 'Left me speechless',
    quality: 'Fresh from farm to table',
    user_id: 1,
    restaurant_id: 3,
  },
  {
    title: 'Good food bad experience',
    description:
      'Food was up to my standards, was left wanting more from the service.',
    date_created: 'November 22, 2022',
    service: 'Orders were incorrect and allergies ignored.',
    taste: 'Though it was wrong, it definitely was good.',
    quality: 'Decent but not amazing.',
    user_id: 2,
    restaurant_id: 2,
  },
  {
    title: 'Good experience bad food',
    description:
      'Location is nice and show is intertaining, food is not my favorite.',
    date_created: 'January 25, 2016',
    service: 'Good service, staff was friendly and delightful.',
    taste: 'Desperate need of a rework.',
    quality:
      'Quality of food puts a damper on the quality of everything else this place has to offer.',
    user_id: 6,
    restaurant_id: 5,
  },
];

const seedReviews = () => Review.bulkCreate(reviewData);

module.exports = seedReviews;

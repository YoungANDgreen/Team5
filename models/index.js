const User = require('./User');
const Restaurant = require('./Restaurant');
const Review = require('./Review');

User.hasMany(Review, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});

Review.belongsTo(User, {
  foreignKey: 'user_id',
});

User.hasMany(Restaurant, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});

Restaurant.belongsTo(User, {
  foreignKey: 'user_id',
});

Review.hasOne(Restaurant, {
  foreignKey: 'review_id',
  onDelete: 'CASCADE',
});

Restaurant.belongsTo(Review, {
  foreignKey: 'review_id',
});

module.exports = { User, Restaurant, Review };

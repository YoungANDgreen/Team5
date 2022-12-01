const { Restaurant } = require('../models');

const restaurantData = [
  {
    local: 'Las Tortas',
    address: '5307 Leetsdale Dr, Denver, CO 80246',
    user_id: 1,
  },
  {
    local: 'Four by Brother Luck',
    address: '321 N Tejon St, Colorado Springs, CO 80903',
    user_id: 2,
  },
  {
    local: 'Santo',
    address: '1265 Alpine Ave., Boulder, CO 80304',
    user_id: 3,
  },
  {
    local: 'Bar Dough',
    address: '2227 W 32nd Ave, Denver, CO 80211',
    user_id: 4,
  },
  {
    local: 'Casa Bonita',
    address: '6715 W Colfax Ave, Lakewood, CO 80214',
    user_id: 6,
  },
  {
    local: 'Denver Biscuit Co',
    address: '2501 Dallas St, Aurora, CO 80010',
    user_id: 5,
  },
];

const seedRestaurants = () => Restaurant.bulkCreate(restaurantData);

module.exports = seedRestaurants;

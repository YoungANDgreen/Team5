const router = require('express').Router();
const { Restaurant, User } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
  try {
    const newRestaurant = await Restaurant.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newRestaurant);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', withAuth, async (req, res) => {
  try {
    const restaurantData = await Restaurant.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!restaurantData) {
      res.status(404).json({ message: 'No Restaurant found with this id!' });
      return;
    }

    res.status(200).json(restaurantData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// router.get('/', async (req, res) => {
//   try {
//     // Get all restaurants and JOIN with user data
//     const restaurantData = await Restaurant.findAll({
//       include: [
//         {
//           model: User,
//           attributes: ['name'],
//         },
//       ],
//     });

//     // Serialize data so the template can read it
//     const restaurants = restaurantData.map((restaurant) =>
//       restaurant.get({ plain: true })
//     );

//     // Pass serialized data and session flag into template
//     res.render('restaurant', {
//       restaurants,
//       logged_in: req.session.logged_in,
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

router.get('/restaurant/:id', async (req, res) => {
  try {
    const restaurantData = await Restaurant.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });

    const restaurant = restaurantData.get({ plain: true });

    res.render('restaurant', {
      ...restaurant,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;

const router = require('express').Router();
const { Review, User } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
  try {
    const newReview = await Review.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newReview);
    console.log('works');
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', withAuth, async (req, res) => {
  try {
    const reviewData = await Review.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!reviewData) {
      res.status(404).json({ message: 'No Review found with this id!' });
      return;
    }

    res.status(200).json(reviewData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// router.get('/', async (req, res) => {
//     try {
//       // Get all reviews and JOIN with user data
//       const reviewData = await Review.findAll({
//         include: [
//           {
//             model: User,
//             attributes: ['name'],
//           },
//         ],
//       });
//       console.log('works');
//       // Serialize data so the template can read it
//       const reviews = reviewData.map((review) => review.get({ plain: true }));

//       // Pass serialized data and session flag into template
//       res.render('homepage', {
//         reviews,
//         logged_in: req.session.logged_in
//       });
//     } catch (err) {
//       res.status(500).json(err);
//     }
//   });

router.get('/review/:id', async (req, res) => {
  try {
    const reviewData = await Review.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });
    console.log('works');
    const review = reviewData.get({ plain: true });

    res.render('review', {
      ...review,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;

const router = require('express').Router();

const { User } = require('../../models');

// get all users
router.get('/', (req, res) => {
	User.findAll({
		attributes: { exclude: ['password'] }
	})
		.then(dbUserData => res.json(dbUserData))
		.catch(err => {
			console.log(err);
			res.status(500).json(err);
		});
});


// // GET /api/users
// router.get('/', (req, res) => {
// 	// Access our User model and run .findAll() method)
// 	User.findAll()
// 		.then(dbUserData => res.json(dbUserData))
// 		.catch(err => {
// 			console.log(err);
// 			res.status(500).json(err);
// 		});
// });

module.exports = router;

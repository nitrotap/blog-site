const router = require('express').Router();
const { User, Post } = require('../../models');


// get all users
router.get('/', async (req, res) => {
	try {
		const dbUserData = await User.findAll({
			attributes: { exclude: ['password'] }
		});
		console.log(dbUserData);
		res.json(dbUserData);
	} catch (err) {
		console.log(err);
		res.status(500).json(err);
	}
});

// get single user
router.get('/:id', async (req, res) => {
	try {
		const dbUserData = await User.findOne({
			attributes: { exclude: ['password'] },
			where: {
				id: req.params.id
			},
			include: [
				{
					model: Post,
					attributes: ['id', 'title', 'post_url', 'created_at']
				},
				{
					model: Comment,
					attributes: ['id', 'comment_text', 'created_at'],
					include: {
						model: Post,
						attributes: ['title']
					}
				}]
		});
		if (!dbUserData) {
			res.status(404).json({ message: 'No user found with this id' });
			return;
		}
		res.json(dbUserData);
	} catch (err) {
		console.log(err);
		res.status(500).json(err);
	}
});

// add a single user
router.post('/', async (req, res) => {
	try {
		const dbUserData = await User.create({
			username: req.body.username,
			email: req.body.email,
			password: req.body.password
		});
		req.session.save(() => {
			req.session.user_id = dbUserData.id;
			req.session.username = dbUserData.username;
			req.session.loggedIn = true;
			res.json(dbUserData);
		});
	} catch (err) {
		console.log(err);
		res.status(500).json(err);
	}
});


router.post('/login', async (req, res) => {
	// expects {email: 'user5@email.com', password: 'mypassword'}

	const dbUserData = await User.findOne({
		where: {
			email: req.body.email
		}
	});

	if (!dbUserData) {
		res.status(400).json({ message: 'No user with that email address!' });
		return;
	}

	const validPassword = dbUserData.checkPassword(req.body.password);

	if (!validPassword) {
		res.status(400).json({ message: 'Incorrect username or password!' });
		return;
	}

	req.session.save(() => {
		req.session.user_id = dbUserData.id;
		req.session.username = dbUserData.username;
		req.session.loggedIn = true;

		res.json({ user: dbUserData, message: 'You are now logged in!' });
	});
});

router.post('/logout', (req, res) => {
	if (req.session.loggedIn) {
		req.session.destroy(() => {
			res.json({ message: 'Logging out!' }).status(204).end();
		});
	}
	else {
		res.status(404).end();
	}
});

router.put('/:id', async (req, res) => {
	// expects {username: 'user5', email: 'user5@email.com', password: 'newpassword'}
	// pass in req.body instead to only update what's passed through
	try {
		const dbUserData = await User.update(req.body, {
			individualHooks: true,
			where: {
				id: req.params.id
			}
		});
		if (!dbUserData) {
			res.status(404).json({ message: 'No user found with this id' });
			return;
		}
		res.json(dbUserData);
	} catch (err) {
		console.log(err);
		res.status(500).json(err);
	}
});

router.delete('/:id', async (req, res) => {
	try {
		const dbUserData = User.destroy({
			where: {
				id: req.params.id
			}
		});
		if (!dbUserData) {
			res.status(404).json({ message: 'No user found with this id' });
			return;
		}
		res.json(dbUserData);
	} catch (err) {
		console.log(err);
		res.status(500).json(err);
	}
});

module.exports = router;

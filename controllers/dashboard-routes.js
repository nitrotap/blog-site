const router = require('express').Router();
const { Post, User, Comment } = require('../models');
const withAuth = require('../utils/auth');

// get all posts for dashboard
router.get('/', withAuth, async (req, res) => {
	console.log(req.session);
	console.log('======================');
	try {
		const dbPostData = await Post.findAll({
			where: {
				user_id: req.session.user_id
			},
			attributes: [
				'id',
				'contents',
				'title',
				'created_at'],
			include: [
				{
					model: Comment,
					attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
					include: {
						model: User,
						attributes: ['username']
					}
				},
				{
					model: User,
					attributes: ['username']
				}
			]
		});
		const posts = dbPostData.map(post => post.get({ plain: true }));
		res.render('dashboard', { posts, loggedIn: true });
	} catch (err) {
		console.log(err);
		res.status(500).json(err);
	}
});


router.get('/edit/:id', withAuth, async (req, res) => {
	try {
		let dbPostData = await Post.findByPk(req.params.id, {
			attributes: [
				'id',
				'contents',
				'title',
				'created_at'
			],
			include: [
				{
					model: Comment,
					attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
					include: {
						model: User,
						attributes: ['username']
					}
				},
				{
					model: User,
					attributes: ['username']
				}
			]
		});

		if (dbPostData) {
			const post = dbPostData.get({ plain: true });

			res.render('edit-post', {
				post,
				loggedIn: true
			});
		} else {
			res.status(404).end();
		}
	} catch (err) {
		res.status(500).json(err);
	}
});

module.exports = router;

const router = require('express').Router();
const { Comment } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', async (req, res) => {
	try {
		const dbCommentData = await Comment.findAll();
		res.json(dbCommentData);
	} catch (err) {
		console.log(err);
		res.status(500).json(err);
	}
});

router.post('/', withAuth, (req, res) => {
	// expects => {comment_text: "This is the comment", user_id: 1, post_id: 2}
	try {
		const dbCommentData = Comment.create({
			comment_text: req.body.comment_text,
			user_id: req.session.user_id,
			post_id: req.body.post_id
		});
		res.json(dbCommentData);
	} catch (err) {
		console.log(err);
		res.status(400).json(err);
	}
});

router.delete('/:id', withAuth, (req, res) => {
	try {
		const dbCommentData = Comment.destroy({
			where: {
				id: req.params.id
			}
		});
		if (!dbCommentData) {
			res.status(404).json({ message: 'No comment found with this id!' });
			return;
		}
		res.json(dbCommentData);
	} catch (err) {
		console.log(err);
		res.status(500).json(err);
	}
});

module.exports = router;

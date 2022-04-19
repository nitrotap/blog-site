const { Post } = require('../models');

const postdata = [
	{
		title: 'Donec posuere metus vitae ipsum.',
		contents: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, blanditiis ullam quibusdam esse consequatur dolor tempora aspernatur labore perspiciatis quisquam laborum odit fuga consectetur facilis ipsum numquam rerum officia ex!',
		user_id: 10
	},
	{
		title: 'Morbi non quam nec dui luctus rutrum.',
		contents: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, blanditiis ullam quibusdam esse consequatur dolor tempora aspernatur labore perspiciatis quisquam laborum odit fuga consectetur facilis ipsum numquam rerum officia ex!',
		user_id: 8
	},
	{
		title: 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.',
		contents: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, blanditiis ullam quibusdam esse consequatur dolor tempora aspernatur labore perspiciatis quisquam laborum odit fuga consectetur facilis ipsum numquam rerum officia ex!',
		user_id: 1
	},
	{
		title: 'Nunc purus.',
		contents: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, blanditiis ullam quibusdam esse consequatur dolor tempora aspernatur labore perspiciatis quisquam laborum odit fuga consectetur facilis ipsum numquam rerum officia ex!',
		user_id: 4
	},
	{
		title: 'Pellentesque eget nunc.',
		contents: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, blanditiis ullam quibusdam esse consequatur dolor tempora aspernatur labore perspiciatis quisquam laborum odit fuga consectetur facilis ipsum numquam rerum officia ex!',
		user_id: 7
	},
	{
		title: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
		contents: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, blanditiis ullam quibusdam esse consequatur dolor tempora aspernatur labore perspiciatis quisquam laborum odit fuga consectetur facilis ipsum numquam rerum officia ex!',
		user_id: 4
	},
	{
		title: 'In hac habitasse platea dictumst.',
		contents: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, blanditiis ullam quibusdam esse consequatur dolor tempora aspernatur labore perspiciatis quisquam laborum odit fuga consectetur facilis ipsum numquam rerum officia ex!',
		user_id: 1
	},
	{
		title: 'Morbi non quam nec dui luctus rutrum.',
		contents: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, blanditiis ullam quibusdam esse consequatur dolor tempora aspernatur labore perspiciatis quisquam laborum odit fuga consectetur facilis ipsum numquam rerum officia ex!',
		user_id: 1
	},
	{
		title: 'Duis ac nibh.',
		contents: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, blanditiis ullam quibusdam esse consequatur dolor tempora aspernatur labore perspiciatis quisquam laborum odit fuga consectetur facilis ipsum numquam rerum officia ex!',
		user_id: 9
	},
	{
		title: 'Curabitur at ipsum ac tellus semper interdum.',
		contents: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, blanditiis ullam quibusdam esse consequatur dolor tempora aspernatur labore perspiciatis quisquam laborum odit fuga consectetur facilis ipsum numquam rerum officia ex!',
		user_id: 5
	},
	{
		title: 'In hac habitasse platea dictumst.',
		contents: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, blanditiis ullam quibusdam esse consequatur dolor tempora aspernatur labore perspiciatis quisquam laborum odit fuga consectetur facilis ipsum numquam rerum officia ex!',
		user_id: 3
	},
	{
		title: 'Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.',
		contents: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, blanditiis ullam quibusdam esse consequatur dolor tempora aspernatur labore perspiciatis quisquam laborum odit fuga consectetur facilis ipsum numquam rerum officia ex!',
		user_id: 10
	},
	{
		title: 'Donec dapibus.',
		contents: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, blanditiis ullam quibusdam esse consequatur dolor tempora aspernatur labore perspiciatis quisquam laborum odit fuga consectetur facilis ipsum numquam rerum officia ex!',
		user_id: 8
	},
	{
		title: 'Nulla tellus.',
		contents: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, blanditiis ullam quibusdam esse consequatur dolor tempora aspernatur labore perspiciatis quisquam laborum odit fuga consectetur facilis ipsum numquam rerum officia ex!',
		user_id: 3
	},
	{
		title: 'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.',
		contents: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, blanditiis ullam quibusdam esse consequatur dolor tempora aspernatur labore perspiciatis quisquam laborum odit fuga consectetur facilis ipsum numquam rerum officia ex!',
		user_id: 3
	},
	{
		title:
			'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam.',
		contents: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, blanditiis ullam quibusdam esse consequatur dolor tempora aspernatur labore perspiciatis quisquam laborum odit fuga consectetur facilis ipsum numquam rerum officia ex!',
		user_id: 7
	},
	{
		title: 'In hac habitasse platea dictumst.',
		contents: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, blanditiis ullam quibusdam esse consequatur dolor tempora aspernatur labore perspiciatis quisquam laborum odit fuga consectetur facilis ipsum numquam rerum officia ex!',
		user_id: 6
	},
	{
		title: 'Etiam justo.',
		contents: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, blanditiis ullam quibusdam esse consequatur dolor tempora aspernatur labore perspiciatis quisquam laborum odit fuga consectetur facilis ipsum numquam rerum officia ex!',
		user_id: 4
	},
	{
		title: 'Nulla ut erat id mauris vulputate elementum.',
		contents: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, blanditiis ullam quibusdam esse consequatur dolor tempora aspernatur labore perspiciatis quisquam laborum odit fuga consectetur facilis ipsum numquam rerum officia ex!',
		user_id: 6
	},
	{
		title: 'Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.',
		contents: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, blanditiis ullam quibusdam esse consequatur dolor tempora aspernatur labore perspiciatis quisquam laborum odit fuga consectetur facilis ipsum numquam rerum officia ex!',
		user_id: 7
	}
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;

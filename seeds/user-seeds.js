const { User } = require('../models');

const userData = [
	{
		username: 'sircaresalot',
		email: 'sircaresalot@email.com',
		password: 'password123'
	},
	{
		username: 'msjackson',
		email: 'msjackson@email.com',
		password: 'password123'
	},
	{
		username: 'alzcares',
		email: 'alzcares@email.com',
		password: 'password123'
	},
	{
		username: 'bestgrandma1',
		email: 'bestgrandma1@email.com',
		password: 'password123'
	},
	{
		username: 'grandpaoty',
		email: 'grandpaoty@email.com',
		password: 'password123'
	},
	{
		username: 'notanurse',
		email: 'notanurse@email.com',
		password: 'password123'
	},
	{
		username: 'alztips',
		email: 'alztips@email.com',
		password: 'password123'
	},
	{
		username: 'thebestcaregiver',
		email: 'thebestcaregiver@email.com',
		password: 'password123'
	},
	{
		username: 'ilovecats',
		email: 'ilovecats@email.com',
		password: 'password123'
	},
	{
		username: 'ilovedogs',
		email: 'ilovedogs@email.com',
		password: 'password123'
	}
];

const seedUsers = () => User.bulkCreate(userData, { individualHooks: true });

module.exports = seedUsers;

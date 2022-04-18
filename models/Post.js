const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Post extends Model { }

Post.init(
	{
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		title: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				len: [1]
			}
		},
		contents: {
			type: DataTypes.TEXT,
			allowNull: true,
		},
		user_id: {
			type: DataTypes.INTEGER,
			references: {
				model: 'user',
				key: 'id'
			}
		},
		username: {
			type: DataTypes.STRING,
			references: {
				model: 'user',
				key: 'username'
			}
		}
	},
	{
		sequelize,
		freezeTableName: true,
		modelName: 'post',
		underscored: true
	}
);

module.exports = Post;

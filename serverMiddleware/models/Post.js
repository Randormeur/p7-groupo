const Sequelize  = require('sequelize');
const sequelize = require('../utils/database');
const User = require ('../models/User');

const Post = sequelize.define('Post', {
     // Model attributes are defined here
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    userid: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },
    content: {
        type: Sequelize.TEXT,
        allowNull: false
    },
  
});

/* Post.associate = (User)=>{
    Post.belongsTo(User, {
        foreignKey: {
            allowNull: false,
            name:'id'
        }
    })
    
};*/

User.hasMany(Post)
Post.belongsTo(User)

module.exports = Post;
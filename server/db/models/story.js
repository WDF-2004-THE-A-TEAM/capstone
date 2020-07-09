const Sequelize = require('sequelize')
const db = require('../db')

const Story = db.define('story', {
  title: {
    type: Sequelize.STRING,
    allowNull: true
  },
  author: {
    type: Sequelize.STRING,
    allowNull: true
  },
  coverImage: {
    type: Sequelize.STRING,
    defaultValue: 'public/LindaEng_Untitled_Artwork 8.png'
  },
  canvasJson: {
    type: Sequelize.JSON
  }
})

module.exports = Story

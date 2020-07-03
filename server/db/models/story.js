const Sequelize = require('sequelize')
const db = require('../db')

export const Story = db.define('story', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  author: {
    type: Sequelize.STRING,
    allowNull: false
  },
  coverImage: {
    type: Sequelize.STRING,
    defaultValue: 'public/LindaEng_Untitled_Artwork 8.png'
  }
})

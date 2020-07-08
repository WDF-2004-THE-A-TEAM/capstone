const Sequelize = require('sequelize')
const db = require('../db')

const Page = db.define('page', {
  imgURL: {
    type: Sequelize.STRING,
    defaultValue: 'public/LindaEng_Untitled_Artwork 5.png'
  },
  canvasPage: {
    type: Sequelize.JSON
  }
})

module.exports = Page

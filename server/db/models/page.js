const Sequelize = require('sequelize')
const db = require('../db')

export const Page = db.define('page', {
  imgURL: {
    type: Sequelize.STRING,
    defaultValue: 'public/LindaEng_Untitled_Artwork 5.png'
  }
})

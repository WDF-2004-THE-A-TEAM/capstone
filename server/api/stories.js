const router = require('express').Router()
const {Story} = require('../db/models')
module.exports = router

//get all stories
router.get('/', async (req, res, next) => {
  try {
    const stories = await Story.findAll()
    if (stories) {
      res.status(200).json(stories)
    } else {
      res.sendStatus(404)
    }
  } catch (error) {
    next(error)
  }
})

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

//get one story
router.get('/:storyID', async (req, res, next) => {
  try {
    const storyId = req.params.storyID
    const story = await Story.findByPk(storyId)
    if (story) {
      res.status(200).json(story)
    } else {
      res.sendStatus(404)
    }
  } catch (error) {
    next(error)
  }
})

//*****UPDATE THIS ROUTE */
//get story with pages
router.get('/:storyID/pages', async (req, res, next) => {
  try {
    const storyId = req.params.storyID
    const story = await Story.findByPk(storyId)
    if (story) {
      res.status(200).json(story)
    } else {
      res.sendStatus(404)
    }
  } catch (error) {
    next(error)
  }
})

//create story
router.post('/', async (req, res, next) => {
  console.log('json req.body ===', req.body)
  let newStory = {
    title: 'New Story',
    author: 'Nan',
    coverImage: 'public/LindaEng_Untitled_Artwork 8.png',
    canvasJson: req.body
  }
  try {
    const updatedStory = await Story.create(newStory)
    if (updatedStory) {
      console.log('succesfully added new story to database')
      res.sendStatus(200)
    } else {
      res.sendStatus(500)
    }
  } catch (error) {
    next(error)
  }
})

//update story
router.put('/:storyID', async (req, res, next) => {
  try {
    const storyId = req.params.storyID
    const storyToUpdate = await Story.findByPk(storyId)
    const updatedStory = await storyToUpdate.update(req.body)
    if (updatedStory) {
      res.status(200).json(updatedStory)
    } else {
      const error = new Error('Failed to PUT /api/stories/:storyID')
      error.status = 500
      throw error
    }
  } catch (error) {
    next(error)
  }
})

//delete story
router.delete('/:storyID', async (req, res, next) => {
  try {
    const storyId = req.params.storyID
    const storyToDelete = await Story.findByPk(storyId)
    const deletedStory = await storyToDelete.destroy()
    if (deletedStory) {
      res.sendStatus(204)
    } else {
      const error = new Error('Failed to DELETE /api/stories/:storyID')
      error.status = 500
      throw error
    }
  } catch (error) {
    next(error)
  }
})

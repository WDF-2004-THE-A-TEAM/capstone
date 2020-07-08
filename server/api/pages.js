const router = require('express').Router()
const {Page} = require('../db/models')
module.exports = router

//get All pages
router.get('/', async (req, res, next) => {
  try {
    const pages = await Page.findAll()
    if (pages) {
      res.status(200).json(pages)
    } else {
      res.sendStatus(404)
    }
  } catch (error) {
    next(error)
  }
})

//get One page
router.get('/:pageID', async (req, res, next) => {
  try {
    const pageId = req.params.pageID
    const onePage = await Page.findByPk(pageId)
    if (onePage) {
      res.status(200).json(onePage)
    } else {
      res.sendStatus(404)
    }
  } catch (error) {
    next(error)
  }
})

//Delete one Page
router.delete('/:pageID', async (req, res, next) => {
  try {
    const pageId = req.params.pageID
    const pageToDelete = await Page.findByPk(pageId)
    const deletedPage = awaitpageToDelete.destroy()
    if (deleted) {
      res.sendStatus(204)
    } else {
      const error = new Error(
        'Failed to delete keyboard to DELETE /api/pages/:pageID'
      )
    }
  } catch (error) {
    next(error)
  }
})

//Create a page
router.post('/', async (req, res, next) => {
  try {
    const newPage = await Page.create(req.body)
    if (newPage) {
      res.sendStatus(200)
    } else {
      res.sendStatus(404)
    }
  } catch (error) {
    next(error)
  }
})

//update page
router.put('/:pageID', async (req, res, next) => {
  try {
    const pageId = req.params.pageID
    const pageToEdit = await Page.findByPk(pageId)
    const updatedPage = await pageToEdit.update(req.body)
    if (updatedPage) {
      res.status(200).json(updatedPage)
    } else {
      const error = new Error('Failed to PUT /api/pages/:pageID')
      error.status = 500
      throw error
    }
  } catch (error) {
    next(error)
  }
})
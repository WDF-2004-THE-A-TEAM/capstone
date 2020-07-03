const {expect} = require('chai')
const db = require('../index')
const Story = db.model('story')

describe('Story Model', () => {
  let story
  beforeEach(() => {
    story = {
      title: 'A House is not a Home',
      author: 'Ari Bernard',
      coverImage: 'public/LindaEng_Untitled_Artwork 8.png'
    }
    return db.sync({force: true})
  })
  it('has fields title, author, coverImage', async () => {
    const newStory = await Story.create(story)
    expect(newStory.title).to.equal('A House is not a Home')
    expect(newStory.author).to.equal('Ari Bernard')
    expect(newStory.coverImage).to.equal(
      'public/LindaEng_Untitled_Artwork 8.png'
    )
  })

  const validationTestNull = testColumn => {
    return async () => {
      delete story[testColumn]
      const withoutColumn = await Story.build(story)
      try {
        await withoutColumn.validate()
        throw new Error(
          `validation was successful but should have failed without '${testColumn}'`
        )
      } catch (err) {
        expect(err.message).to.contain(`${testColumn} cannot be null`)
      }
    }
  }

  it('title cannot be null', validationTestNull('title'))
  it('author cannot be null', validationTestNull('author'))

  it('has a default image if none specified', async () => {
    delete story.coverImage
    const defaultType = await Story.create(story)
    expect(defaultType.coverImage).to.equal(
      'public/LindaEng_Untitled_Artwork 8.png'
    )
  })
})

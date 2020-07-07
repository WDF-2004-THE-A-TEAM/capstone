const db = require('../server/db')
const {User, Story, Page, Sticker} = require('../server/db/models')

const seedUser = [
  {
    name: 'Dog guy',
    email: 'doggo@gmail.com',
    password: 'abc123',
    avatar: '',
    salt: 'ab246',
    googleId: 'googleString123',
    isLoggedIn: true
  },
  {
    name: 'Pizza guy',
    email: 'pizza@gmail.com',
    password: 'pepperoni14lyfe',
    avatar: '',
    salt: '9876',
    googleId: 'gzsee3',
    isLoggedIn: false
  },
  {
    name: 'Hunter guy',
    email: 'hunter@cuny.edu',
    password: 'college',
    avatar: '',
    salt: 'googlyeyes',
    googleId: 'greatest',
    isLoggedIn: false
  }
]
const seedStory = [
  {
    title: 'Three little pigs',
    author: 'Nan P',
    coverImage:
      'https://cdn.shopify.com/s/files/1/0278/9759/products/Three_Litte_Pigs_Box_Product_Front_-_Shopify_CM_2048x.jpg?v=1574272985'
  },
  {
    title: 'Corduroy',
    author: 'Linda E',
    coverImage:
      ' https://prodimage.images-bn.com/pimages/9780140501735_p0_v3_s550x406.jpg'
  },
  {
    title: 'Where the wild things are ',
    author: 'Claudia',
    coverImage:
      'https://images-na.ssl-images-amazon.com/images/I/71eczBv1C5L._AC_SL1001_.jpg'
  }
]
const seedPage = [
  {
    imageURL:
      'https://lh3.googleusercontent.com/proxy/_t50bNKNBV12lPLGS43V_CQSIgmWYLKBpKuBOhYMcduULqkPtuVkRlcnLwHUgF_t1lGDDalrRj1Lk0uXUaxD7YA-bPiOAilYjjpmDaZegKmVZl48XbEKjz5KUrXmNo07N5jTaWDaQ8YOjMj6xHFf'
  },
  {
    imageURL:
      'https://www.south-african-homeschool-curriculum.com/wp-content/uploads/2013/06/The-Herd-Boy.jpg'
  },
  {
    imageURL:
      'https://mir-s3-cdn-cf.behance.net/project_modules/1400/4f5b0b64115393.5ac74bf1aad22.jpg'
  }
]
const seedSticker = [
  {
    imgURL:
      'https://i.pinimg.com/236x/39/b7/1d/39b71d7e538389db653f0fb24cf4dff8--jeep-stickers-mac-stickers.jpg'
  },
  {
    imgURL:
      'https://dejpknyizje2n.cloudfront.net/marketplace/products/single-small-flame-sticker-1540311449.661467.png'
  },
  {
    imgURL:
      'https://dejpknyizje2n.cloudfront.net/svgcustom/clipart/preview/lightning-bolt-513-14749-550x550.png'
  }
]

const seed = async () => {
  try {
    await db.sync({force: true})
    await User.bulkCreate(seedUser, {validate: true})
    await Story.bulkCreate(seedStory, {validate: true})
    await Page.bulkCreate(seedPage, {validate: true})
    await Sticker.bulkCreate(seedSticker, {validate: true})
  } catch (error) {
    console.log('SOMETHING WENT WRONG WITH THE SEEDING: ', error)
  }
}

module.exports = seed

if (require.main === module) {
  seed()
    .then(() => {
      console.log('Seeding success!')
      db.close()
    })
    .catch(err => {
      console.error('Oh noes! Something went wrong!')
      console.error(err)
      db.close()
    })
}

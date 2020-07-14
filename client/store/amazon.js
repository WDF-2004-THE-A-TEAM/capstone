import axios from 'axios'

//action type
const UPLOAD_IMAGE = 'UPLOAD_IMAGE'

//action creator
const uploadImage = image => {
  return {
    type: UPLOAD_IMAGE,
    story
  }
}

//inital state
const initialState = {
  image: {}
}

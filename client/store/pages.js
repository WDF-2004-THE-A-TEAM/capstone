import axios from 'axios'
import history from '../history'

//action types
const GET_ALL_PAGES = 'GET_ALL_PAGES'
const REMOVE_ONE_PAGE = 'REMOVE_ONE_PAGE'
const ADD_PAGE = 'ADD_PAGE'
const GET_ONE_PAGE = 'GET_ONE_PAGE'

//action creators
const getAllPages = pages => {
  return {
    type: GET_ALL_PAGES,
    pages
  }
}
const removeOnePage = pageID => {
  return {
    type: REMOVE_ONE_PAGE,
    pageID
  }
}

const addPage = page => {
  return {
    type: ADD_PAGE,
    page
  }
}

const getPageToEdit = page => {
  return {
    type: GET_ONE_PAGE,
    page
  }
}

//initial state
const initialState = {
  pages: []
}

//Thunk creators
//fetch all pages from user
export const fetchAllPages = storyId => async dispatch => {
  try {
    const res = await axios.get(`/api/stories/${storyId}/pages`)
    dispatch(getAllPages(res.data))
  } catch (error) {
    console.error(error)
  }
}

export const deletePage = pageID => async dispatch => {
  try {
    await axios.delete(`/api/pages/${pageID}`)
    dispatch(removeOnePage(pageID))
    history.push('/gallery')
  } catch (error) {
    console.error(error)
  }
}

export const addPageToStory = (storyId, newPage, fileToUpload) => {
  return async dispatch => {
    const data = new FormData()
    // If file selected
    if (fileToUpload) {
      data.append('canvasImage', fileToUpload, fileToUpload.name)
      axios
        .post('/api/profile/canvas-img-upload', data, {
          headers: {
            accept: 'application/json',
            'Accept-Language': 'en-US,en;q=0.8',
            'Content-Type': `multipart/form-data; boundary=${data._boundary}`
          }
        })
        .then(response => {
          if (200 === response.status) {
            // If file size is larger than expected.
            if (response.data.error) {
              if ('LIMIT_FILE_SIZE' === response.data.error.code) {
                console.log('FILE TOO BIG')
              } else {
                console.log(response.data)
                // If not the given file type
              }
            } else {
              // Success
              let fileName = response.data
              let imageObj = Object.assign(newPage, {
                imgURL: fileName.location
              })
              axios.post(`/api/stories/${storyId}/pages`, imageObj)
              dispatch(addPage(response.data))
            }
          }
        })
        .catch(error => {
          // If another error
          console.error(error)
        })
    } else {
      // if file not selected throw error
      console.log('UPLOADD SOMETHING')
    }
  }
}

export const fetchOnePage = pageID => async dispatch => {
  try {
    const {data} = await axios.get(`/api/pages/${pageID}`)
    console.log('data', data)
    dispatch(getPageToEdit(data))
  } catch (error) {
    console.error(error)
  }
}

//reducer
export default function allPages(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_PAGES:
      return {...state, pages: action.pages}
    case REMOVE_ONE_PAGE:
      return {
        ...state,
        pages: state.allPages.filter(id => id !== action.pageID)
      }
    case ADD_PAGE:
      return {
        ...state,
        pages: action.page
      }
    case GET_ONE_PAGE:
      return {
        ...state,
        pages: [action.page]
      }
    default:
      return state
  }
}

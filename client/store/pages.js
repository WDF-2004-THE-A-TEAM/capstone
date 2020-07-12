import axios from 'axios'
import history from '../history'

//action types
const GET_ALL_PAGES = 'GET_ALL_PAGES'
const REMOVE_ONE_PAGE = 'REMOVE_ONE_PAGE'
const ADD_PAGE = 'ADD_PAGE'

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

//initial state
const initialState = {
  allPages: []
}

//Thunk creators
export const fetchAllPages = () => async dispatch => {
  try {
    const res = await axios.get('/api/pages')
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

export const addPageToStory = (storyId, page) => async dispatch => {
  try {
    const response = await axios.post(`/api/stories/${storyId}/pages`, page)
    dispatch(addPage(response.data))
  } catch (error) {
    console.error(error)
  }
}

//reducer
export default function allPages(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_PAGES:
      return {...state, allPages: action.pages}
    case REMOVE_ONE_PAGE:
      return {
        ...state,
        allPages: state.allPages.filter(id => id !== action.pageID)
      }
    case ADD_PAGE:
      return {
        ...state,
        allPages: [...state.allPages, action.page]
      }
    default:
      return state
  }
}

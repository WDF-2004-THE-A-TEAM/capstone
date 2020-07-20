import axios from 'axios'
import history from '../history'

//action types
const GET_ALL_PAGES = 'GET_ALL_PAGES'

//action creators
const getAllPages = pages => {
  return {
    type: GET_ALL_PAGES,
    pages
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

//reducer
export default function allPages(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_PAGES:
      return {...state, pages: action.pages}

    default:
      return state
  }
}

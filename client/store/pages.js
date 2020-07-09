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
  allPages: []
}

//Thunk creators
export const fetchAllPages = () => async dispatch => {
  try {
    const res = await axios.get('/api/pages')
    dispatch(getAllPages(res.data))
  } catch (error) {
    console.log(error)
  }
}

//reducer
export default function(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_PAGES:
      return {...state, allPages: action.pages}
    default:
      return state
  }
}

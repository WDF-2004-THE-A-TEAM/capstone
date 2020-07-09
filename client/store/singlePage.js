import axios from 'axios'

//action type
const GET_ONE_PAGE = 'GET_ONE_PAGE'
const EDIT_PAGE = 'EDIT_PAGE'

//action creator
const getOnePage = page => {
  return {
    type: GET_ONE_PAGE,
    page
  }
}
const editPage = page => {
  return {
    type: EDIT_PAGE,
    page
  }
}
//initial state
const initialState = {
  page: {}
}

//Thunk Creator
export const fetchSinglePage = pageID => async dispatch => {
  try {
    const res = await axios.get(`/api/pages/${pageID}`)
    dispatch(getOnePage(res.data))
  } catch (error) {
    console.log(error)
  }
}

//edit page thunk
export const editOnePage = (pageID, page) => async dispatch => {
  try {
    const res = await axios.put(`/api/pages/${pageID}`, page)
    dispatch(editPage(res.data))
  } catch (error) {
    console.log(error)
  }
}

//reducer
export default function singlePageReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ONE_PAGE:
      return {...state, page: action.page}
    case EDIT_PAGE:
      return {...state, page: action.page}
    default:
      return state
  }
}

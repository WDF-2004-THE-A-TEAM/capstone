import axios from 'axios'

//action type
const GET_ONE_STORY = 'GET_ONE_STORY'
const EDIT_STORY = 'EDIT_STORY'

//action creator
const getOneStory = story => {
  return {
    type: GET_ONE_STORY,
    story
  }
}
const editStory = story => {
  return {
    type: EDIT_STORY,
    story
  }
}
//initial state
const initialState = {
  story: {}
}

//Thunk Creator
export const fetchSingleStory = storyID => async dispatch => {
  try {
    const res = await axios.get(`/api/stories/${storyID}`)
    dispatch(getOneStory(res.data))
  } catch (error) {
    console.log(error)
  }
}

//edit story thunk
export const editOneStory = (storyID, story) => async dispatch => {
  try {
    const res = await axios.put(`/api/stories/${storyID}`, story)
    dispatch(editStory(res.data))
  } catch (error) {
    console.log(error)
  }
}

//reducer
export default function singleStoryReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ONE_STORY:
      return {...state, story: action.story}
    case EDIT_STORY:
      return {...state, story: action.story}
    default:
      return state
  }
}

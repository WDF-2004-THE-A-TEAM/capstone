import axios from 'axios'
import history from '../history'

//action types
const GET_ALL_STORIES = 'GET_ALL_STORIES'
const ADD_STORY = 'ADD_STORY'

//action creator
const getAllStories = stories => {
  return {
    type: GET_ALL_STORIES,
    stories
  }
}
const addNewStory = newStory => {
  return {
    type: ADD_STORY,
    newStory
  }
}

//initial state
const initialState = {
  allStories: []
}

//Thunk creators
//get all stories from all users
export const fetchAllStories = userId => async dispatch => {
  try {
    const res = await axios.get(`/api/stories/${userId}/stories`)
    dispatch(getAllStories(res.data))
  } catch (error) {
    console.log(error)
  }
}

//add Story to User Thunk Creator
export const addStoryToUser = (userId, brandNewStory) => {
  console.log('story', {userId, brandNewStory})
  return async dispatch => {
    const response = await axios.post(
      `/api/stories/${userId}/stories`,
      brandNewStory
    )
    dispatch(addNewStory(response.data))
  }
}

//reducer

export default function allStories(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_STORIES:
      return {...state, allStories: action.stories}
    case ADD_STORY:
      return {...state, allStories: [...state.allStories, action.newStory]}

    default:
      return state
  }
}

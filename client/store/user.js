import axios from 'axios'
import history from '../history'

/**
 * ACTION TYPES
 */
const GET_USER = 'GET_USER'
const REMOVE_USER = 'REMOVE_USER'
const CREATE_USER = 'CREATE_USER'

/**
 * INITIAL STATE
 */
const defaultUser = {}

/**
 * ACTION CREATORS
 */
const getUser = user => ({type: GET_USER, user})
const removeUser = () => ({type: REMOVE_USER})
const createUser = newUser => ({type: CREATE_USER, newUser})

/**
 * THUNK CREATORS
 */

//Thunks: Create a new user
export const addNewUser = newUser => async dispatch => {
  try {
    const res = await axios.post('/api/users', newUser)
    dispatch(createUser(res.data))
  } catch (error) {
    console.error('Big Sad: Error Making a new user')
  }
}

export const me = () => async dispatch => {
  try {
    const res = await axios.get('/auth/me')
    dispatch(getUser(res.data || defaultUser))
  } catch (err) {
    console.error(err)
  }
}

export const auth = (email, password, method) => async dispatch => {
  let res
  try {
    res = await axios.post(
      `/auth/${method}`,
      // method is how we are getting the correct route.
      // In the signIn form mapToDispatch, I'm passing in 3 params. When we're matching the email in the password we need to send it as a data structures to access the value
      {email, password}
    )
  } catch (authError) {
    return dispatch(getUser({error: authError}))
  }

  try {
    dispatch(getUser(res.data))
    history.push('/home')
  } catch (dispatchOrHistoryErr) {
    console.error(dispatchOrHistoryErr)
  }
}

export const logout = () => async dispatch => {
  try {
    await axios.post('/auth/logout')
    dispatch(removeUser())
    history.push('/login')
  } catch (err) {
    console.error(err)
  }
}

/**
 * REDUCER
 */
export default function(state = defaultUser, action) {
  switch (action.type) {
    case CREATE_USER:
      return action.newUser
    case GET_USER:
      return action.user
    case REMOVE_USER:
      return defaultUser
    default:
      return state
  }
}

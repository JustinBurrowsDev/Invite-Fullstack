//1.imports
import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import axios from "axios"

//2. actions defintions
const GET_USER = "user/GET_USER"
const GOING = "user/GOING"
const NOT_GOING = "user/NOTGOING"

//3. initial state
//going to keep track of state going and not going separately
const initialState = {
  user: {},
  going: [],
  notGoing: []
}

//4. reducers (default export)
export default (state = initialState, action) => {
  switch (action.type) {
    case GET_USER:
      return { ...state, user: action.payload }
    case GOING:
      return { ...state, going: action.payload }
    case NOT_GOING:
      return { ...state, notGoing: action.payload }
    default:
      return state
  }
}

//5. action creators
function notGoing(user) {
  return dispatch => {
    axios.post("/api/notgoing", user).then(resp => {
      dispatch(getUser())
    })
  }
}

function Going(user) {
  return dispatch => {
    axios.post("/api/going", user).then(resp => {
      dispatch(getUser())
    })
  }
}
//
function getGoing() {
  return dispatch => {
    axios.get("/api/going").then(resp => {
      const data = resp.data
      dispatch({
        type: GOING,
        payload: data
      })
    })
  }
}

function getNotGoing() {
  return dispatch => {
    axios.get("/api/notgoing").then(resp => {
      const data = resp.data
      dispatch({
        type: NOT_GOING,
        payload: data
      })
    })
  }
}

function getUser() {
  return dispatch => {
    axios.get("/api/user").then(resp => {
      const data = resp.data
      console.log(data)
      dispatch({
        type: GET_USER,
        payload: data
      })
    })
  }
}

//6. custom hook (named export)
export function useInvite() {
  //dispatch() is the method used to dispatch actions and trigger state changes to the store SEE: https://stackoverflow.com/questions/42871136/dispatch-function-in-react-redux
  const dispatch = useDispatch()
  //A selector is a small function you write that can take the entire Redux state, and pick out a value from it. SEE: https://daveceddia.com/redux-selectors/
  const user = useSelector(appState => appState.userState.user)

  const going = useSelector(appState => appState.userState.going)
  const notgoing = useSelector(appState => appState.userState.notGoing)
  const sendGoing = user => dispatch(Going(user))
  const sendNotgoing = user => dispatch(notGoing(user))

  useEffect(() => {
    dispatch(getUser())
    dispatch(getGoing())
    dispatch(getNotGoing())
  }, [dispatch])
  return { user, going, notgoing, sendGoing, sendNotgoing }
}

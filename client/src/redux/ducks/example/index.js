// import { useEffect } from "react"
// import { useSelector, useDispatch } from "react-redux"
// import axios from "axios"

// const GET_USER = "ex/GET_EXAMPLE"

// const initialState = {
//   user: {}
// }

// export default (state = initialState, action) => {
//   switch (action.type) {
//     case GET_USER:
//       return { ...state, user: action.payload }
//     default:
//       return state
//   }
// }

// function getExample() {
//   return dispatch => {
//     axios.get("/api/user").then(resp => {
//       const data = resp.data
//       dispatch({
//         type: GET_USER,
//         payload: data
//       })
//     })
//   }
// }

// export function useExample() {
//   const dispatch = useDispatch()
//   const user = useSelector(appState => appState.exampleState.user)

//   useEffect(() => {
//     dispatch(getExample())
//   }, [dispatch])
//   return { user }
// }

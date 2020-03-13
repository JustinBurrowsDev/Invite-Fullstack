import { useInvite } from "../hooks"
import React from "react"
import "../styles/going.css"

export default props => {
  const { going } = useInvite()
  return (
    <div className="goingPage">
      {going.map(item => (
        <div className="invited">
          <img src={item.image}></img>
          <p>{item.name}</p>
          <p>{item.phone}</p>
          <p>{item.email}</p>
        </div>
      ))}
    </div>
  )
}

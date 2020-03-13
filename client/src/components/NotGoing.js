import { useInvite } from "../hooks"
import React from "react"
import "../styles/notgoing.css"

export default props => {
  const { notgoing } = useInvite()
  return (
    <div className="notgoingpage">
      {notgoing.map(item => (
        <div className="notinvited">
          <img src={item.image}></img>
          <p>{item.name}</p>
          <p>{item.phone}</p>
          <p>{item.email}</p>
        </div>
      ))}
    </div>
  )
}

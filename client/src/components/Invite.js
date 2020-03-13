import React, { useEffect, useState } from "react"
import axios from "axios"
import { useInvite } from "../hooks"
import "../styles/invitesection.css"

export default props => {
  const { user, sendGoing, sendNotgoing } = useInvite()
  return (
    <div>
      <div className="inviteSection">
        <img src={user.image}></img>
        <p>{user.name}</p>
        <p>{user.phone}</p>
        <p>{user.email}</p>
      </div>
      <div className="buttons">
        <button onClick={e => sendGoing(user)}>GOING</button>
        <button onClick={e => sendNotgoing(user)}>NOT GOING</button>
      </div>
    </div>
  )
}

import React from "react"
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import Invite from "./Invite.js"
import NotGoing from "./NotGoing.js"
import Going from "./Going.js"
import "../styles/app.css"

export default props => {
  return (
    <Router>
      <div className="wrapper">
        <div className="pages">
          <div className="home">
            <Link to="/"> HOME </Link>
          </div>
          <div className="going">
            <Link to="/going"> GOING </Link>
          </div>
          <div className="notgoing">
            <Link to="/notgoing"> NOT GOING </Link>
          </div>
        </div>
        <div className="invite">
          <Route exact path="/" component={Invite} />
        </div>
        <div className="going">
          <Route exact path="/Going" component={Going} />{" "}
        </div>
        <div className="notgoing">
          <Route exact path="/NotGoing" component={NotGoing} />{" "}
        </div>
      </div>
    </Router>
  )
}

const express = require("express")
const router = express.Router()

const users = []
let userID = 0

// this file in routes is going to call the functions in order
// listining for post request, and when a post request comes in I want to increment the user id by 1
router.post("/", (req, res, next) => {
  userId++
  //next- no response is need at this time, I need to create the user first
  next()
})

// still listining for only post request, when one come is were going to push the  user on to the user array
router.post("/", (req, res, next) => {
  user.push({ ...req.body, id: req.userId })
  //response . json is going to respond back, with the user that was created
  res.json({
    id: req.userId,
    message: "User Added"
  })
  // once that is done were going to go ahead and log out all the users
  console.log(user)
})

router.get("/:id", (req, res, next) => {
  console.log(typeof req.params.id)
  // got find the user that has this specific id
  const user = user.find(u => u.id === Number(req.params.id))
  res.json(user)
})

module.exports = router

const express = require("express")
const router = express.Router()
const axios = require("axios")
const shortid = require("shortid")

//to track the state of going or not going
const data = {
  user: {},
  going: [],
  notgoing: []
}

router.get("/user", (req, res, next) => {
  //call to api to get 1 random user, you can put he website name in the url to make sure that it works, and returns data
  axios.get("https://randomuser.me/api/?results=1").then(resp => {
    const obj = resp.data.results[0]
    const user = {
      id: shortid.generate(),
      name: obj.name.first + " " + obj.name.last,
      email: obj.email,
      phone: obj.phone,
      image: obj.picture.large
    }
    data.user = user
    res.json(user)
    console.log(user)
  })
})

router.post("/going", (req, res, next) => {
  const user = req.body
  data.going.push(user)
  res.json(data.user)
})
//users that are going
router.get("/going", (req, res, next) => {
  res.json(data.going)
})

router.post("/notgoing", (req, res, next) => {
  const user = req.body
  data.notgoing.push(user)
  console.log(data.notgoing)
  res.json(data.user)
})

router.get("/notgoing", (req, res, next) => {
  res.json(data.notgoing)
})

module.exports = router

// let userID = 0
// let going = []
// let notgoing = []

// // this file in routes is going to call the functions in order
// // listining for post request, and when a post request comes in I want to increment the user id by 1
// // router.post("/", (req, res, next) => {
// //   userId++
// //next- no response is need at this time, I need to create the user first
// // next()
// // })
// //get 1 random user
// router.get("/user", (req, res) => {
//   axios.get("https://randomuser.me/api?result=1").then(user => {
//     userID++
//     const users = user.data.results.map(item => ({
//       id: userID,
//       name: `${item.name.first} ${item.name.last}`,
//       email: item.email,
//       phone: item.cell,
//       img: item.picture.large
//     }))

//     res.json(users[0])
//     console.log(user)
//   })
//   // spreading object out, getting user info, and adding on the object
// })

// // still listining for only post request, when one come is were going to push the  user on to the user array
// router.post("/", (req, res, next) => {
//   user.push({ ...req.body, id: req.userId })
//   //response . json is going to respond back, with the user that was created
//   res.json({
//     id: req.userId,
//     message: "User Added"
//   })
//   // once that is done were going to go ahead and log out all the users
//   console.log(user)
// })

// router.get("/:id", (req, res, next) => {
//   console.log(typeof req.params.id)
//   // got find the user that has this specific id
//   const user = user.find(u => u.id === Number(req.params.id))
//   res.json(user)
// })

// module.exports = router

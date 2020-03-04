const express = require("express")
const exampleRoutes = require("./routes/example")

const app = express()
const port = 3001
const user = []

// listing for all request
app.use(express.urlencoded({ extended: false }))
// im looking for json data coming in, middleware
app.use(express.json())
app.use("/user", exampleRoutes)

// i want to hit the api so i can get the users
app.get("/", (req, res) => {
  $.ajax({
    url: "https://randomuser.me/api/",
    dataType: "json",
    success: function(user) {
      console.log(user)
    } // on want to push the data that i called on to array
  }).then(user => res.json(user.data.results))
  console.log(req)
  res.json(user)
  res.send(user)
})

app.listen(port, () => {
  console.log(`LISTENING ON PORT ${port}`)
})

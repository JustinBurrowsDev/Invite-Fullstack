const express = require("express")
//routes set up for inviting
const exampleRoutes = require("./routes/example")

const app = express()
const port = 3001

// listing for all request
app.use(express.urlencoded({ extended: false }))
// im looking for json data coming in, middleware
app.use(express.json())

app.use("/api", exampleRoutes)

// i want to hit the api so i can get the users

app.listen(port, () => {
  console.log(`LISTENING ON PORT ${port}`)
})

const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")

require("dotenv").config()

const app = express()

const startServer = async () => {
  app.use(express.json())

  app.use(cors())

  // Add logger middleware
  if (process.env.NODE_ENV !== "production") {
    const volleyball = require("volleyball")
    app.use(volleyball)
  }

  // Connect to MongoDB
  const { MONGO_URI } = process.env
  try {
    await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    console.log("Connected to MongoDB")
  } catch (err) {
    console.log(err)
  }

  app.use("/WatchList", require("./routes/WatchList"))

  app.get("/", (_req, res) => {
    res.json({ message: "The server works! 🚀" })
  })

  app.use((err, req, res, next) => {
    res.send("ERROR!")
  })

  const port = process.env.PORT || 5000
  app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
  })
}

module.exports = startServer

const express = require("express")
const Item = require("../models/Item")

const router = express.Router()

const stuff = require("./temp.json")

router.get("/temp", (_req, res) => {
  res.json({ stuff })
})

router.get("/", async (_req, res) => {
  try {
    const items = await Item.find().sort({ name: 1 })
    res.json(items)
  } catch (err) {
    throw err
  }
})

router.post("/", async (req, res) => {
  const { name, status } = req.body
  const newItem = new Item({
    name: name,
    status: status
  })
  try {
    const item = await newItem.save()
    res.json(item)
  } catch (err) {
    throw err
  }
})

router.delete("/:id", async (req, res) => {
  const { id } = req.params
  // console.log(id)
  try {
    const item = Item.findById(id)
    res.json(item)
    await item.remove()
    res.json({ message: "deleted" })
  } catch (err) {
    throw err
  }
})

module.exports = router

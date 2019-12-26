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

router.get("/:id", async (req, res) => {
  const { id } = req.params
  try {
    const item = await Item.findById(id)

    if (!item) {
      return res.status(404).send("Item not found")
    }

    res.json(item)
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
    res.status(201).json(item)
  } catch (err) {
    throw err
  }
})

router.delete("/:id", async (req, res) => {
  const { id } = req.params

  try {
    const item = await Item.findByIdAndDelete(id)

    if (!item) {
      return res.status(404).send("Item not found")
    }

    res.json(item)
  } catch (err) {
    throw err
  }
})

router.put("/:id", async (req, res) => {
  const { status } = req.body
  const { id } = req.params
  try {
    const item = await Item.findById(id)

    if (item) {
      return res.status(404).send("Item not found")
    }

    item.status = status
    await item.save()
    res.json(item)
  } catch (err) {
    throw err
  }
})

module.exports = router

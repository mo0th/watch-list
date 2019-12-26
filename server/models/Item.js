const mongoose = require("mongoose")
const Schema = mongoose.Schema

const ItemSchema = new Schema(
  {
    name: {
      type: String,
      required: true
    },
    status: {
      type: String,
      enum: [
        "unwatched",
        "watching",
        "decided not to watch",
        "watched",
        "rewatching"
      ],
      default: "to watch"
    }
  },
  { timestamps: true }
)

module.exports = Item = mongoose.model("item", ItemSchema)

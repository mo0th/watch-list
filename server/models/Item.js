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
        "on hold",
        "watched",
        "rewatching"
      ],
      default: "unwatched"
    }
  },
  { timestamps: true }
)

module.exports = Item = mongoose.model("item", ItemSchema)

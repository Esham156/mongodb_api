const mongoose = require('mongoose')

const snackSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "the snack must have a name"],
    unique: true
  },
  description: {
    type:  String,
    required: [true, "You can't have an empty description"]
  }
})

const Snack = mongoose.model('snacks', snackSchema)

module.exports = Snack
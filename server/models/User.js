const mongoose = require("mongoose");
const validator = require("validator");

const UserSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("Email is not valid");
      }
    },
  },
  age: {
    type: Number,
    min: 18,
    max: 50,
    required: true
  },
  gender: {
    type: String,
    required: true
  },
});

module.exports = mongoose.model("User", UserSchema);

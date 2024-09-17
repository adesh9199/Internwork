const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  e_mail: {
    type: String,
    required: true,
    validate: {
      validator: function(v) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
      },
      message: props => `${props.value} is not a valid email address. Try again!`
    }
  },
  userName: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  role: {
    type: String,
  },
});

// const User =

module.exports =  mongoose.model("User", userSchema);;

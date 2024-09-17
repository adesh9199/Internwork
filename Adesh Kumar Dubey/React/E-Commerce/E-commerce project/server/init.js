const mongoose = require('mongoose');


// Define the user schema
const userSchema = new mongoose.Schema({
  e_mail: {
    type: String,
    required: true,
    validate: {
      validator: function(v) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
      },
      message: props => `${props.value} is not a valid email address, try again!`
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

const User = mongoose.model("User", userSchema);


const admin = {
  e_mail: "adeshkumardubey889@gmail.com",
  userName: "Adesh Bhardwaj",
  password: "1234abc",
  role: "Admin"
};

User.insertMany([admin]);

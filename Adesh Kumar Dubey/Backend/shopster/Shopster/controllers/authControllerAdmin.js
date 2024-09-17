const ownerModel = require("../models/owner-model");
const bcrypt = require("bcryptjs");
const { generateToken } = require("../utils/generateToken");

module.exports.registerAdmin = async function (req, res) {
  try {
    let owners = await ownerModel.find();
    if (owners.length > 0) {
      return res.status(500).send("You don't have permission to create a new owner.");
    }

    let { fullname, email, password } = req.body;

    // Hash the password
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);

    // Create the owner
    let createdOwner = await ownerModel.create({
      email,
      password: hash,
      fullname,
    });

    res.status(201).send("Admin registered successfully."); // Indicate success
  } catch (err) {
    res.status(500).send(err.message);
  }
};

module.exports.loginAdmin = async function (req, res) {
  try {
    let { email, password } = req.body;

    let admin = await ownerModel.findOne({ email: email });
    if (!admin) {
      req.flash("error", "Email or Password incorrect");
      return res.redirect("/owners/login");
    }

    const result = await bcrypt.compare(password, admin.password);
    if (result) {
      let token = generateToken(admin);
      res.cookie("admin_token", token, { httpOnly: true }); 
      res.redirect("/owners/admin");
    } else {
      req.flash("error", "Email or Password incorrect");
      return res.redirect("/owners/login");
    }
  } catch (err) {
    res.status(500).send(err.message);
  }
};

module.exports.logout = function (req, res) {
  res.clearCookie("admin_token");
  res.clearCookie("user_token"); // Ensure both cookies are cleared if needed
  res.redirect("/");
};

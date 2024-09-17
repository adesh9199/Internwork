const express = require("express");
const router = express.Router();
const ownerModel = require("../models/owner-model");
const productModel = require("../models/product-model");
const isAdminLogin = require("../middlewares/isAdminLogin");

const {
  registerAdmin,
  loginAdmin,
  logout,
} = require("../controllers/authControllerAdmin");

if (process.env.NODE_ENV === "development") {
  router.post("/create", registerAdmin);
}

router.get("/createProducts", isAdminLogin, function (req, res) {
  let success = req.flash("success");
  res.render("createproducts", { success ,loggedin:false });
});

router.get("/admin", isAdminLogin, async function (req, res) {
  try {
    let products = await productModel.find();
    res.render("admin", { products, loggedin: false });
  } catch (err) {
    res.status(500).send(err.message);
  }
});

router.get("/login", function (req, res) {
  res.render("owner-login", { loggedin: false });
});

router.post("/loginAdmin", loginAdmin);
router.get("/logout", logout);

module.exports = router;

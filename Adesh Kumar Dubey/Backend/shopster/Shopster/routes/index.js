const express = require("express");
const router = express.Router();
const isloggedin = require("../middlewares/isLoggedIn");
const productModel = require("../models/product-model");
const isAdminLogin=require("../middlewares/isAdminLogin");
const userModel = require("../models/user-model");
// const isloggedin = require("../middlewares/isLoggedIn");

router.get("/", function (req, res) {
  let error = req.flash("error");
  res.render("index", { error , loggedin:false});
});

router.get("/shop", isloggedin, async function (req, res) {
  try {
    let products = await productModel.find();
    let success=req.flash("success");
    let users=await userModel.findOne({email:req.user.email}).populate("cart");

    res.render("shop", { products , success, users });
  } catch (err) {
    console.error('Error fetching products:', err);
    res.status(500).send('Internal Server Error');
  }
});
router.get("/cart", isloggedin, async function (req, res) {
  try {
    let user=await userModel.findOne({email:req.user.email}).populate("cart");

    res.render("cart", { user });
  } catch (err) {
    console.error('Error fetching products:', err);
    res.status(500).send('Internal Server Error');
  }
});


router.get("/delete",isAdminLogin, async function (req, res) {
  try {
    await productModel.deleteMany({});
    console.log('All documents deleted successfully');
  } catch (err) {
    console.error('Error deleting documents:', err);
  }
  res.redirect("/owners/admin");
});



router.get("/addToCart/:productid", isloggedin , async function (req, res) {
  try{
let user=await userModel.findOne({email:req.user.email});
user.cart.push(req.params.productid);
await user.save();
req.flash("success", "Added to cart")
  res.redirect("/shop")}
  catch (err) {
    console.error('Error fetching products:', err);
    res.status(500).send('Internal Server Error');
  }
});

// Assuming you're using Express.js
router.delete('/cart/remove/:itemId', isloggedin, async (req, res) => {
  const itemId = req.params.itemId;
  
  try {
      let user = await userModel.findOne({ email: req.user.email });

      if (!user) {
          return res.status(404).json({ success: false, message: 'User not found' });
      }

      // Find and remove the item from the cart
      user.cart = user.cart.filter(item => item.toString() !== itemId);
      
      await user.save();

      res.json({ success: true });
  } catch (err) {
      console.error('Error removing item from cart:', err);
      res.status(500).json({ success: false, message: 'Server error' });
  }
});


module.exports = router;

const jwt = require('jsonwebtoken');
const ownerModel = require('../models/owner-model');

module.exports = async function (req, res, next) {
  const token = req.cookies.admin_token; // Ensure it checks for the correct token

  if (!token) {
    req.flash('error', 'You need to login first');
    return res.redirect('/owners/login');
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_KEY);
    const admin = await ownerModel.findOne({ email: decoded.email }).select('-password');

    if (!admin) {
      req.flash('error', 'Invalid token');
      return res.redirect('/owners/login');
    }

    req.admin = admin;
    next();
  } catch (err) {
    req.flash('error', 'Invalid token');
    res.redirect('/owners/login');
  }
};

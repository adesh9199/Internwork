const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const User = require('./models/user'); // Ensure this is the correct path to your User model

const app = express();

// Database connection
async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/User');
    console.log("Connection Successful");
}

main().catch((err) => {
    console.error("Connection error", err);
});

app.use(cors());
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(3000, () => {
    console.log(`Listening at port 3000`);
});

app.post("/verify-admin", async (req, res) => {
    try {
        const token = req.headers.authorization.split(' ')[1];
        const decodedToken = jwt.decode(token);
        const email = req.body.email;

        // Find user by email
        const user = await User.findOne({ e_mail: email });

        if (user) {
            if (user.role === 'Admin') {
                res.json({ isAdmin: true });
            } else {
                res.json({ isAdmin: false });
            }
        } else {
            res.status(404).json({ isAdmin: false });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ isAdmin: false });
    }
});

app.get('/', (req, res) => {
    res.render("Home");
});

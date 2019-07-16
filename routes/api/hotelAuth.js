const express = require("express");
// To use router
const router = express.Router();
// To use middleware for authentication
const auth = require("../../middleware/auth");
const User = require("../../models/Users");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("config");
const { check, validationResult } = require("express-validator");

// @route  GET api/auth
// @desc   Test route
// @access Public

router.get("/", auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");
    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// res.send("hotel auth route"));

// // @route  GET api/users
// // @desc   Test route
// // @access Public
// router.get("/", (req, res) => res.send("hotel auth route"));

// @route  POST api/auth
// @desc   Authenticate hotel Users
// @access Public
router.post(
  "/",
  [
    check("email", "Please Enter a valid email").isEmail(),
    check("password", "Password is required").exists()
  ],
  async (req, res) => {
    // console.log(req.body);
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, password } = req.body;

    try {
      // Check for user exits
      let user = await User.findOne({ email });
      if (!user) {
        return res
          .status(400)
          .json({ errors: [{ msg: "Invalid Credentials" }] });
      }

      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res
          .status(400)
          .json({ errors: [{ msg: "Invalid Credentials" }] });
      }
      const payload = {
        user: {
          id: user.id
        }
      };

      jwt.sign(
        payload,
        config.get("jwtSecret"),
        { expiresIn: 36000000000 },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
      // // Return jsonwebtoken
      // res.send("Hotel Users registered.");
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  }
);

module.exports = router;

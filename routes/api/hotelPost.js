const express = require("express");
// To use router
const router = express.Router();

// @route  GET api/users
// @desc   Test route
// @access Public
router.get("/", (req, res) => res.send("hotel post route"));

module.exports = router;

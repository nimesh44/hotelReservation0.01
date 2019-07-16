const express = require("express");
// To use router
const router = express.Router();
const config = require("config");
const auth = require("../../middleware/auth");
const Profile = require("../../models/Profile");
const user = require("../../models/Users");
const { check, validationResult } = require("express-validator");

// @route  GET api/profile/me
// @desc   Get current users profile
// @access Private
router.get("/me", auth, async (req, res) => {
  try {
    const hotelProfile = await Profile.findOne({
      user: req.user.id
    }).populate("user", ["name", "avatar"]);
    if (!hotelProfile) {
      return res
        .status(400)
        .json({ msg: "There is no Profile for this hotel" });
    }
    res.json(hotelProfile);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
  //  res.send(" hotel profile route"));
});

// // @route  GET api/users
// // @desc   Test route
// // @access Public
// router.get("/", (req, res) => res.send(" hotel profile route"));

// @route  POST api/profile
// @desc   Create and update User profile
// @access Private
router.post(
  "/",
  [
    auth,
    [
      check("hotelName", "hotelname is required")
        .not()
        .isEmpty(),
      check("location", "location is required")
        .not()
        .isEmpty(),
      check("bio", "Bio is required.").not()
    ]
  ],
  async (req, res) => {
    const errors = validationResult(req);
    // If errors
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const {
      hotelName,
      location,
      bio,
      youtube,
      facebook,
      twitter,
      website,
      facilities,
      wifiStatus,
      swimmingpool,
      no_of_rooms
    } = req.body;

    // Build profile objects
    const profileFields = {};
    profileFields.user = req.user.id;
    if (hotelName) profileFields.hotelName = hotelName;
    if (location) profileFields.location = location;
    if (bio) profileFields.bio = bio;
    if (facilities) {
      profileFields.facilities = facilities
        .split(",")
        .map(facility => facility.trim());
    }

    if (no_of_rooms) profileFields.no_of_rooms = no_of_rooms;
    // Build social object
    profileFields.social = {};
    if (youtube) profileFields.social.youtube = youtube;
    if (facebook) profileFields.social.facebook = facebook;
    if (twitter) profileFields.social.twitter = twitter;
    if (website) profileFields.social.website = website;

    try {
      let profile = await Profile.findOne({ user: req.user.id });
      if (profile) {
        // Update
        profile = await Profile.findOneAndUpdate(
          { user: req.user.id },
          { $set: profileFields },
          { new: true }
        );
        return res.json(profile);
      } else {
        // Create
        profile = new Profile(profileFields);
        await profile.save();
        res.json(profile);
      }
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  }
);
module.exports = router;

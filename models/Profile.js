const mongoose = require("mongoose");
const HotelProfileSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "hotelReservation"
  },
  hotelName: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  bio: {
    type: String,
    required: true
  },
  social: {
    youtube: {
      type: String
    },
    facebook: {
      type: String
    },
    twitter: {
      type: String
    },
    website: {
      type: String
    }
  },

  //   facilities: [
  //     {
  //       wifiStatus: {
  //         type: Boolean
  //       },
  //       swimmingpool: {
  //         type: Boolean
  //       }
  //     }
  //   ],
  facilities: {
    type: [String]
  },
  no_of_rooms: {
    type: Number
  }
});
module.exports = Profile = mongoose.model(
  "hotelProfile for reservation",
  HotelProfileSchema
);

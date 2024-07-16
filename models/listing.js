const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: String,
  image: {
    filename: String,
    url: {
      type: String,
      default:
        "https://unsplash.com/photos/white-house-under-maple-trees-1ddol8rgUH8",
      set: (v) =>
        v === ""
          ? "https://unsplash.com/photos/white-house-under-maple-trees-1ddol8rgUH8"
          : v,
    },
  },
  price: Number,
  location: String,
  country: String,
});

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;

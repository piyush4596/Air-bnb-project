const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Listing = require("./models/listing.js");

const MONGO_URL = "mongodb://127.0.0.1:27017/airbnb";

main()
  .then(() => {
    console.log("connected to DB");
  })
  .catch((err) => {
    console.log(err);
  });
async function main() {
  await mongoose.connect(MONGO_URL);
}

app.get("/", (req, res) => {
  res.send("Hello, I am root!");
});

app.get("/testListing", async (req, res) => {
  let sampleListing = new Listing({
    title: "My home",
    description: "By the road",
    price: 100,
    location: "gujarat",
    country: "india",
  });

  await sampleListing.save();
  console.log("sample saved");
  res.send("successful testing");
});

app.listen(8080, () => {
  console.log("app is listening on port 8080");
});

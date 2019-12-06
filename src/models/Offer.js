const mongoose = require("mongoose");

const OfferSchema = new mongoose.Schema(
  {
    thumbnail: String,
    price: Number,
    city: String,
    categories: [String],
    productName: String,
    companyName: String,
    description: String,
    lat: String,
    lng: String,
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    }
  },
  {
    toJSON: {
      virtuals: true
    }
  }
);

OfferSchema.virtual("thumbnail_url").get(function() {
  return `https://sabeofertas.herokuapp.com/files/${this.thumbnail}`;
});

module.exports = mongoose.model("Offer", OfferSchema);

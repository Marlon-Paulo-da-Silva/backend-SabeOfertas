const mongoose = require("mongoose");

const CompanySchema = mongoose.Schema(
  {
    companyPicture: String,
    companyName: String,
    description: String,
    address: String,
    city: String,
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

CompanySchema.virtual("companyPicture_url").get(function() {
  return `https://sabeofertas.herokuapp.com/files/${this.companyPicture}`;
});

module.exports = mongoose.model("Company", CompanySchema);

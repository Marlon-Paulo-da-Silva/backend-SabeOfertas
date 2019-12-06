const User = require("../models/User");
const Offer = require("../models/Offer");

module.exports = {
  async index(req, res) {
    const { category, city } = req.query;

    const offers = await Offer.find({
      categories: category,
      city: city
    });

    console.log(offers);

    return res.json(offers);
  },

  async show(req, res) {
    const { city } = req.query;

    const offers = await Offer.find({
      // city: "/" + city + "$/"
      // city: cityFind
      city: new RegExp(city + "$")
    });

    return res.json(offers);
  },

  async store(req, res) {
    const { filename } = req.file;
    console.log(filename);
    const {
      companyName,
      city,
      description,
      productName,
      categories,
      price,
      lat,
      lng
    } = req.body;
    const { user_id } = req.headers;

    const user = await User.findById(user_id);

    if (!user) {
      return res
        .status(400)
        .json({ error: "Faça Login para publicar ofertas" });
    }

    const offer = await Offer.create({
      user: user_id,
      thumbnail: filename,
      companyName,
      city,
      productName,
      description,
      categories: categories.split(",").map(cat => cat.trim()),
      price,
      lat,
      lng
    });

    return res.json(offer);
  }
};

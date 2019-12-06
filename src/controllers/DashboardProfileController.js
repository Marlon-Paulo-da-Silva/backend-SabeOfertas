const Offer = require("../models/Offer");

module.exports = {
  async show(req, res) {
    const { user_id } = req.headers;

    const offers = await Offer.find({ user: user_id });

    return res.json(offers);
  }
};

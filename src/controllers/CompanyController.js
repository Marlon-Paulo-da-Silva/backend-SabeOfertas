const Company = require("../models/Company");
const User = require("../models/User");

module.exports = {
  async store(req, res) {
    const { filename } = req.file;
    const {
      local,
      companyName,
      description,
      city,
      address,
      lat,
      lng
    } = req.body;

    const { user_id } = req.headers;

    const user = await User.findById(user_id);

    if (!user)
      return res.status(400).json({ error: "Faça Login para criar uma Loja" });

    // return res.json("filename: " + filename);

    const company = await Company.create({
      user: user_id,
      companyPicture: filename,
      companyName,
      description,
      address,
      city,
      lat,
      lng
    });

    return res.json(company);
  }
};

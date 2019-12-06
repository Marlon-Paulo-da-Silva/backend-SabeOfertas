const User = require("../models/User");

module.exports = {
  async store(req, res) {
    const { name, email, city } = req.body;

    let userf = await User.findOne({ email });

    if (!userf) {
      const user = await User.create({ name, email, city });
      return res.json(user);
    }

    return res.json(userf);
  }
};

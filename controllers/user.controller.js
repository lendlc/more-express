const User = require("../models/User");

exports.getUsers = async (req, res) => {
  const users = await User.find();

  res.status(200).json({ success: true, users });
};

exports.createUser = async (req, res) => {
  const user = await User.create(req.body);

  res.status(201).json({ success: true, user });
};

exports.getUser = (req, res) => {
  res.status(200).json({ success: true });
};

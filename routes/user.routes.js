const router = require("express").Router();
const { userValidationRules, validate } = require("../middlewares/validator");

const {
  createUser,
  getUser,
  getUsers,
  updateUser,
  deleteUser,
} = require("../controllers/user.controller.js");

router.route("/").get(getUsers).post(userValidationRules(), validate, createUser);

//router.route("/:id").get(getUser).put(updateUser).delete(deleteUser);

module.exports = router;

const { body, validationResult } = require("express-validator");
const User = require("../models/User");

const userValidationRules = () => {
  return [
    body("firstName").isString(),
    body("email")
      .isEmail()
      //if isEmail is false, custom validator wont be triggered
      .bail()
      .custom((val) => {
        //validates if the email provided is a NU email
        if (val.endsWith("@students.national-u.edu.ph")) return true;
      })
      .withMessage("Invalid NU email")
      .bail()
      .custom((val) => {
        return User.findOne({ email: val }).then((user) => {
          if (user) {
            return Promise.reject("user already exists");
          }
        });
      }),

    body("password")
      .isLength({ min: 8, max: 30 })
      .withMessage("create a password between 8 and 30 characters"),
  ];
};

const validate = (req, res, next) => {
  const err = validationResult(req);

  //if errors is empty proceed to next middleware
  if (err.isEmpty()) {
    return next();
  }

  const formattedErrors = [];
  err.errors.forEach((x) => {
    formattedErrors.push({ [x.param]: x.msg });
  });

  return res.status(400).json({ success: false, errors: formattedErrors });
};

module.exports = { userValidationRules, validate };

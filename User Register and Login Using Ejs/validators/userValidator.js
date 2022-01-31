const { checkSchema } = require("express-validator");

const UserValidator = checkSchema({
  name: {
    require: true,
    errorMessage: "Name is required",
  },
  email: {
    require: true,
    isEmail: {
      errorMessage: "Invalid Email",
    },
  },
  password: {
    isLength: {
      options: { min: 6, max: 100 },
      errorMessage: "Password Must Be 6 Character",
    },
    require: true,
  },
});

//! Exporting Validator
module.exports = UserValidator;
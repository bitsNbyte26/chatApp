const jwt = require("jsonwebtoken");

const generateToken = (id) => {
  return jwt.sign({ id }, 'saiyam' , {
    expiresIn: "30d",
  });
};

module.exports = generateToken;

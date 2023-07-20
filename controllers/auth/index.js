const signup = require("./signup");
const login = require("./login");
const logout = require("./logout");
const getCurrent = require("./getCurrent");
const verifyEmail = require("./verifyEmail");
const { googleAuth, googleRedirect } = require("./googleAuth");

module.exports = {
  verifyEmail,
  signup,
  login,
  logout,
  getCurrent,
  googleAuth,
  googleRedirect,
};

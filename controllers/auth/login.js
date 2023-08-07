const { User } = require("../../models");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const { ErrorHandler } = require("../../utils/errorHandler");

const { JWT_KEY } = process.env;

const login = async (req, res) => {
  try {
    const { email, password, remember } = req.body;
    const user = await User.findOne({ email });

    if (!user || !user.comparePassword(password)) {
      throw new ErrorHandler(
        401,
        "Email  is wrong or not verify,  or password is wrong"
      );
    }

    const payload = {
      id: user._id,
    };

    const token = jwt.sign(
      payload,
      JWT_KEY,
      remember === true ? { expiresIn: "30d" } : { expiresIn: "1h" }
    );
    if (token) {
      await User.findByIdAndUpdate(user._id, { token });

      res.json({
        status: "success",
        code: 200,
        token,
        user: {
          name: user.name,
          lastName: user.lastName,
          email: user.email,
          user: user.user,
        },
      });
    }
    res.status(401).json({ message: "Email or password is wrong" });
  } catch (error) {
    next(new ErrorHandler(error.statusCode || 500, error.message));
  }
};

module.exports = login;

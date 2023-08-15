const { Storage } = require("../../models");
const { ErrorHandler } = require("../../helpers/errorHandler");

const getPhoneById = async (req, res, next) => {
  try {
    const { model } = req.params;
    const phone = await Storage.findOne({ model });
    if (!phone) {
      throw new ErrorHandler(404, `Product with id=${model} not found`);
    }
    if (phone) {
      res.json({
        status: "success",
        code: 200,
        phone,
      });
    }
  } catch (error) {
    next(new ErrorHandler(error.statusCode || 500, error.message));
  }
};

module.exports = getPhoneById;

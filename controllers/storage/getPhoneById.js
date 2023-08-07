const { Storage } = require("../../models");
const { ErrorHandler } = require("../../helpers/errorHandler");

const getStorage = async (req, res, next) => {
  try {
    const { id } = req.params;
    const phone = await Storage.findById(id);
    if (!phone) {
      throw new ErrorHandler(404, `Product with id=${id} not found`);
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

module.exports = getStorage;

const { Brand } = require("../../models");
const { ErrorHandler } = require("../../helpers/errorHandler");

const getById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const OneBrand = await Brand.findById(id);

    if (!OneBrand) {
      throw new ErrorHandler(404, `Product with id=${id} not found`);
    }
    res.json({
      status: "success",
      code: 200,
      OneBrand,
    });
  } catch (error) {
    next(new ErrorHandler(error.statusCode || 500, error.message));
  }
};

module.exports = getById;

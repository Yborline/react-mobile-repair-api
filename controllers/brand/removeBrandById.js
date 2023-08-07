const { Brand } = require("../../models");
const { ErrorHandler } = require("../../helpers/errorHandler");

const removeBrandById = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await Brand.findByIdAndRemove(id);
    if (!data) {
      throw new ErrorHandler(404, `Product with id=${id} not found`);
    }

    res.json({
      status: "success",
      code: 200,
      message: "clothes deleted",
      data,
    });
  } catch (error) {
    next(new ErrorHandler(error.statusCode, error.message));
  }
};
module.exports = removeBrandById;

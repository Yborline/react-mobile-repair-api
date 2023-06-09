// const clothesOperations = require("../../models/clothes");
const createError = require("http-errors");
const { Brand } = require("../../models");
const { ErrorHandler } = require("../../helpers/errorHandler");

const removeBrandById = async (req, res) => {
  try {
    const { id } = req.params;
    // const result = await clothesOperations.removeClothes(clothesId);
    const data = await Brand.findByIdAndRemove(id);
    if (!data) {
      throw createError(404, `Product with id=${id} not found`);
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

// const clothesOperations = require("../../models/clothes");
const { Brand } = require("../../models");
const createError = require("http-errors");
const { ErrorHandler } = require("../../helpers/errorHandler");
const getAll = async (req, res, next) => {
  try {
    const { body } = req;
    const { brand: uniq } = body;
    const oneBrand = await Brand.findOne({ brand: uniq.toLowerCase() });
    if (oneBrand) {
      throw createError(404, `Such a brand already exists!`);
    }

    const data = await Brand.create({
      ...body,
    });
    res.json({
      status: "success",
      code: 201,
      data,
    });
  } catch (error) {
    next(new ErrorHandler(error.statusCode || 500, error.message));
  }
};

module.exports = getAll;

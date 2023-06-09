// const clothesOperations = require("../../models/clothes");
const { Brand } = require("../../models");
const createError = require("http-errors");
const { ErrorHandler } = require("../../helpers/errorHandler");
const addModel = async (req, res, next) => {
  try {
    const { model } = req.body;
    const { id } = req.params;
    const oldModel = await Brand.findById(id);
    const reapet = oldModel.model.find((item) => item === model);
    if (reapet) {
      throw createError(409, `Item  reapet`);
    }
    const newArray = [...oldModel.model, model];
    const updateModel = await Brand.findByIdAndUpdate(
      id,
      { model: newArray },
      { new: true }
    );
    if (!updateModel) {
      throw createError(404, `Not found`);
    }

    res.json({
      status: "success",
      code: 201,
      updateModel,
    });
  } catch (error) {
    next(new ErrorHandler(error.statusCode || 500, error.message));
  }
};

module.exports = addModel;

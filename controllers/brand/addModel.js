// const clothesOperations = require("../../models/clothes");
const { Brand } = require("../../models");
const { ErrorHandler } = require("../../helpers/errorHandler");
const addModel = async (req, res, next) => {
  try {
    const { model } = req.body;
    const { id } = req.params;
    const oldModel = await Brand.findById(id);

    const reapet = oldModel.model.find(
      (item) => item.toLocaleLowerCase() === model.toLocaleLowerCase()
    );
    if (reapet) {
      throw new ErrorHandler(409, `Item  reapet`);
    }
    const newArray = [model, ...oldModel.model];
    const updateModel = await Brand.findByIdAndUpdate(
      id,
      { model: newArray },
      { new: true }
    );
    if (!updateModel) {
      throw new ErrorHandler(409, `Not found`);
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

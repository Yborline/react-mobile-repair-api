const { Brand } = require("../../models");

const { ErrorHandler } = require("../../helpers/errorHandler");
const RemoveOneModel = async (req, res, next) => {
  try {
    const { model } = req.body;
    const { id } = req.params;
    const oldModel = await Brand.findById(id);
    const newArray = oldModel.model.filter((item) => item !== model);

    const updateModel = await Brand.findByIdAndUpdate(
      id,
      { model: newArray },
      { new: true }
    );
    if (!updateModel) {
      throw new ErrorHandler(404, `Not found`);
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

module.exports = RemoveOneModel;

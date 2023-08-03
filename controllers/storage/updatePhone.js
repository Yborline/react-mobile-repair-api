const { Storage } = require("../../models");
const changeValuePhone = require("../../helpers/changeValuePhone");
const { ErrorHandler } = require("../../helpers/errorHandler");

const updatePhone = async (req, res, next) => {
  try {
    const { model, brand } = req.body;
    const { id } = req.params;
    const oldModel = await Storage.find({ brand });
    if (!oldModel) {
      throw new ErrorHandler(409, "Такого бренда немає");
    }
    const reapet = oldModel.find(
      (item) => item.model.toLocaleLowerCase() === model.toLocaleLowerCase()
    );

    if (!reapet) {
      throw new ErrorHandler(409, "Такої моделі немає");
    }

    const updatePhone = await Storage.findByIdAndUpdate(
      id,
      changeValuePhone(req.body, reapet),
      { new: true }
    );

    res.json({
      status: "success",
      code: 201,
      updatePhone,
    });
  } catch (error) {
    next(new ErrorHandler(error.statusCode || 500, error.message));
  }
};

module.exports = updatePhone;

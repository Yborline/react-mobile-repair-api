const { Storage } = require("../../models");

const { ErrorHandler } = require("../../helpers/errorHandler");

const addPhone = async (req, res, next) => {
  try {
    const { model, brand } = req.body;
    const { _id } = req.user;
    const { body } = req;
    const oldModel = await Storage.findOne({ brand });

    if (oldModel) {
      const reapet = oldModel.model === model;

      if (reapet) {
        throw new ErrorHandler(409, "Така модель вже є");
      }
    }
    const onePhone = await Storage.create({
      ...body,
      owner: _id,
    });
    res.json({
      status: "success",
      code: 201,
      onePhone,
    });
  } catch (error) {
    next(new ErrorHandler(error.statusCode || 500, error.message));
  }
};

module.exports = addPhone;

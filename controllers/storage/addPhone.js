const { Storage } = require("../../models");

const { ErrorHandler } = require("../../helpers/errorHandler");

const addPhone = async (req, res, next) => {
  try {
    const { model, brand } = req.body;
    const { _id, name, email } = req.user;
    const { body } = req;
    const oldModel = await Storage.find({ brand });

    if (oldModel) {
      const reapet = oldModel.find(
        (item) => item.model.toLocaleLowerCase() === model.toLocaleLowerCase()
      );
      console.log(reapet);
      if (reapet) {
        throw new ErrorHandler(409, "Така модель вже є");
      }
    }
    const onePhone = await Storage.create({
      ...body,
      owner: { _id, name, email },
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

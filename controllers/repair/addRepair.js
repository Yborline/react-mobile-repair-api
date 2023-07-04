const { Repair } = require("../../models");
const { ErrorHandler } = require("../../helpers/errorHandler");

const addRepair = async (req, res, next) => {
  try {
    const { _id } = req.user;
    const { body } = req;
    const repair = await Repair.create({
      ...body,
      owner: _id,
    });
    res.json({
      status: "success",
      code: 201,
      repair,
    });
  } catch (error) {
    next(new ErrorHandler(error, statusCode || 500, error.message));
  }
};
module.exports = addRepair;

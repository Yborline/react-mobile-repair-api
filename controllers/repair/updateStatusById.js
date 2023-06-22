const { Repair } = require("../../models");
const createError = require("http-errors");
const { ErrorHandler } = require("../../helpers/errorHandler");

const updateStatusById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    const result = await Repair.findByIdAndUpdate(
      id,
      { status },
      { new: true }
    );

    if (!result) {
      throw createError(404, `Phone with id=${id} not found`);
    }
    res.json({
      status: "success",
      code: 200,
      result,
    });
  } catch (error) {
    next(new ErrorHandler(error.statusCode || 500, error.message));
  }
};

module.exports = updateStatusById;

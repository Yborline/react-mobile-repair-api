const { Repair } = require("../../models");
const createError = require("http-errors");
const { ErrorHandler } = require("../../helpers/errorHandler");

const updateStatusRepairById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { statusRepair } = req.body;

    const result = await Repair.findByIdAndUpdate(
      id,
      { statusRepair },
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

module.exports = updateStatusRepairById;

const { Repair } = require("../../models");
const createError = require("http-errors");
const { ErrorHandler } = require("../../helpers/errorHandler");

const updateStatusById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { status, finishDay, sellPrice, statusRepair } = req.body;

    const oldResult = await Repair.findById(id);

    const result = await Repair.findByIdAndUpdate(
      id,
      { status, finishDay, sellPrice, statusRepair },
      { new: true }
    );

    if (!result && !oldResult) {
      throw createError(404, `Phone with id=${id} not found`);
    }

    // const allRepair = await Repair.find({});
    // const diagnosis = allRepair.filter((item) => item.status === "diagnosis");
    // const repair = allRepair.filter((item) => item.status === "repair");
    // const purchase = allRepair.filter((item) => item.status === "purchase");

    // res.json({
    //   status: "success",
    //   code: 200,
    //   phones: { diagnosis, repair, purchase },
    // });

    res.json({
      status: "success",
      code: 200,
      result,
      oldStatus: oldResult.status,
    });
  } catch (error) {
    next(new ErrorHandler(error.statusCode || 500, error.message));
  }
};

module.exports = updateStatusById;

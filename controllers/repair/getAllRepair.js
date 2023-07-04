const { Repair } = require("../../models");
const { ErrorHandler } = require("../../helpers/errorHandler");

const getAllRepair = async (req, res, next) => {
  try {
    const { _id } = req.user;
    const allRepair = await Repair.find({ owner: _id });

    if (!allRepair.length) {
      throw new Error("Not phones");
    }
    const diagnosis = allRepair.filter((item) => item.status === "diagnosis");
    const repair = allRepair.filter((item) => item.status === "repair");
    const purchase = allRepair.filter((item) => item.status === "purchase");

    //   const data = await Cloth.find({}).populate("owner", "_id name email");
    if (allRepair) {
      res.json({
        status: "success",
        code: 200,
        phones: { diagnosis, repair, purchase },
      });
    }
  } catch (error) {
    next(new ErrorHandler(error.statusCode || 500, error.message));
  }
};
module.exports = getAllRepair;

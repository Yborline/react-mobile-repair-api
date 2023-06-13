const { Repair } = require("../../models");

const getAllRepair = async (req, res, next) => {
  try {
    const allRepair = await Repair.find({});

    //   const data = await Cloth.find({}).populate("owner", "_id name email");
    if (allRepair) {
      res.json({
        status: "success",
        code: 200,
        allRepair,
      });
    }
  } catch (error) {
    console.log(error);
    next(new ErrorHandler(error.statusCode || 500, error.message));
  }
};
module.exports = getAllRepair;

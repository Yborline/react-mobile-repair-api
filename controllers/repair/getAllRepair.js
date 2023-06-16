const { Repair } = require("../../models");

const getAllRepair = async (req, res, next) => {
  try {
    const allRepair = await Repair.find({});

    if (!books.length) {
      throw new Error("Not books");
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
    console.log(error);
    next(new ErrorHandler(error.statusCode || 500, error.message));
  }
};
module.exports = getAllRepair;

// const clothesOperations = require("../../models/clothes");
const { Brand } = require("../../models");
// const { ErrorHandler } = require("../../utils/errorHandler");
const getAll = async (req, res, next) => {
  // поиск своих товаров только определенному юзеру
  // const { _id, name, email } = req.admin;

  // const clothes = await Cloth.find({ owner: _id }).populate(
  //   "owner",
  //   "_id name email"
  // );
  try {
    const allBrand = await Brand.find({});

    //   const data = await Cloth.find({}).populate("owner", "_id name email");
    if (allBrand) {
      res.json({
        status: "success",
        code: 200,
        allBrand,
      });
    }
  } catch (error) {
    console.log(error);
    next(new ErrorHandler(error.statusCode || 500, error.message));
  }
};

module.exports = getAll;

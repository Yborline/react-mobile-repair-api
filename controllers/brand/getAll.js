const { Brand } = require("../../models");

const getAll = async (req, res, next) => {
  try {
    const allBrand = await Brand.find({});

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

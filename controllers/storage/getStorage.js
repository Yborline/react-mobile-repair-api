const { Storage } = require("../../models");
const { ErrorHandler } = require("../../helpers/errorHandler");

const getStorage = async (req, res, next) => {
  try {
    const { _id } = req.user;
    const storage = await Storage.find({ owner: _id }, "").populate(
      "owner",
      "_id name email"
    );
    if (storage) {
      res.json({
        status: "success",
        code: 200,
        storage,
      });
    }
  } catch (error) {
    next(new ErrorHandler(error.statusCode || 500, error.message));
  }
};

module.exports = getStorage;

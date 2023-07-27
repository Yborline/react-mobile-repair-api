const express = require("express");

const { auth, validation, ctrlWrapper } = require("../../middlewares");

const { storage: ctrl } = require("../../controllers");
const { joiStorageSchema } = require("../../models/storage");
const router = express.Router();
const validationMiddleware = validation(joiStorageSchema);

router.get("/", auth, ctrlWrapper(ctrl.getStorage));
router.post("/", auth, validationMiddleware, ctrlWrapper(ctrl.addPhone));

module.exports = router;

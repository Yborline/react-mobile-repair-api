const express = require("express");

const { auth, validation, ctrlWrapper } = require("../../middlewares");

const { storage: ctrl } = require("../../controllers");
const { joiStorageSchema } = require("../../models/storage");
const router = express.Router();
const validationMiddleware = validation(joiStorageSchema);

router.get("/", auth, ctrlWrapper(ctrl.getStorage));
router.get("/:model", auth, ctrlWrapper(ctrl.getPhoneById));
router.post("/:brand", auth, validationMiddleware, ctrlWrapper(ctrl.addPhone));
router.patch("/:id", auth, validationMiddleware, ctrlWrapper(ctrl.updatePhone));

module.exports = router;

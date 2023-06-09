const express = require("express");

const { auth, validation, ctrlWrapper } = require("../../middlewares");

const { brand: ctrl } = require("../../controllers");
const { joiBrandSchema, joiModelSchema } = require("../../models/brand/");
const router = express.Router();

router.get("/", ctrlWrapper(ctrl.getAll));
router.post("/", validation(joiBrandSchema), ctrlWrapper(ctrl.addBrand));
// router.post("/:id", validation(joiBrandSchema), ctrlWrapper(ctrl.addBrand));
router.patch("/:id", validation(joiModelSchema), ctrlWrapper(ctrl.addModel));
router.patch("/removeOneModel/:id", ctrlWrapper(ctrl.RemoveOneModel));
router.delete("/:id", ctrlWrapper(ctrl.removeBrandById));

// router.get("/verify/:verificationToken", ctrlWrapper(ctrl.verifyEmail));
// router.post("/signup");

module.exports = router;

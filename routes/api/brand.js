const express = require("express");

const { auth, validation, ctrlWrapper } = require("../../middlewares");

const { brand: ctrl } = require("../../controllers");
const { joiBrandSchema, joiModelSchema } = require("../../models/brand/");
const router = express.Router();

router.get("/", auth, ctrlWrapper(ctrl.getAll));
router.get("/:id", auth, ctrlWrapper(ctrl.getById));
router.post("/", auth, validation(joiBrandSchema), ctrlWrapper(ctrl.addBrand));
// router.post("/:id", validation(joiBrandSchema), ctrlWrapper(ctrl.addBrand));
router.patch(
  "/:id",
  auth,
  validation(joiModelSchema),
  ctrlWrapper(ctrl.addModel)
);
router.patch("/removeOneModel/:id", auth, ctrlWrapper(ctrl.RemoveOneModel));
router.delete("/:id", auth, ctrlWrapper(ctrl.removeBrandById));

// router.get("/verify/:verificationToken", ctrlWrapper(ctrl.verifyEmail));
// router.post("/signup");

module.exports = router;

const express = require("express");

const { auth, validation, ctrlWrapper } = require("../../middlewares");

const { repair: ctrl } = require("../../controllers/index");
const {
  joiRepairSchema,
  joiStatusRepairSchema,
  joiStatusSchema,
  joiTimeSchema,
  joiPriceSchema,
} = require("../../models/repair");
const router = express.Router();

router.get("/", auth, ctrlWrapper(ctrl.getAllRepair));
router.post(
  "/",
  auth,
  validation(joiRepairSchema),
  ctrlWrapper(ctrl.addRepair)
);
router.patch(
  "/status/:id",
  auth,
  validation(joiStatusSchema),
  ctrlWrapper(ctrl.updateStatusById)
);
router.patch(
  "/statusRepair/:id",
  auth,
  validation(joiStatusRepairSchema),
  ctrlWrapper(ctrl.updateStatusRepairById)
);
router.patch(
  "/time/:id",
  auth,
  validation(joiTimeSchema),
  ctrlWrapper(ctrl.updateTimeById)
);
router.patch(
  "/price/:id",
  auth,
  validation(joiPriceSchema),
  ctrlWrapper(ctrl.updatePriceAndOther)
);
module.exports = router;

const express = require("express");

const { auth, validation, ctrlWrapper } = require("../../middlewares");

const { repair: ctrl } = require("../../controllers/index");
const {
  joiRepairSchema,
  joiStatusRepairSchema,
  joiStatusSchema,
  joiTimeSchema,
} = require("../../models/repair");
const router = express.Router();

router.get("/", ctrlWrapper(ctrl.getAllRepair));
router.post("/", validation(joiRepairSchema), ctrlWrapper(ctrl.addRepair));
router.patch(
  "/status/:id",
  validation(joiStatusSchema),
  ctrlWrapper(ctrl.updateStatusById)
);
router.patch(
  "/statusRepair/:id",
  validation(joiStatusRepairSchema),
  ctrlWrapper(ctrl.updateStatusRepairById)
);
router.patch(
  "/time/:id",
  validation(joiTimeSchema),
  ctrlWrapper(ctrl.updateTimeById)
);
module.exports = router;

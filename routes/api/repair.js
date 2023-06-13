const express = require("express");

const { auth, validation, ctrlWrapper } = require("../../middlewares");

const { repair: ctrl } = require("../../controllers/index");
const { joiRepairSchema } = require("../../models/repair");
const router = express.Router();

router.get("/", ctrlWrapper(ctrl.getAllRepair));
router.post("/", validation(joiRepairSchema), ctrlWrapper(ctrl.addRepair));

module.exports = router;

const { Schema, model } = require("mongoose");
const Joi = require("joi");

const repairSchema = Schema(
  {
    name: {
      type: String,
      required: true,
    },
    numberPhone: {
      type: String,
    },
    status: {
      type: String,
      enum: ["repair", "diagnosis", "purchase"],
      default: "diagnosis",
      required: true,
    },
    statusRepair: {
      type: String,
      enum: ["start", "finish"],
      default: "start",
    },

    finishDay: {
      type: String,
      default: null,
      // required: true,
    },
    brand: {
      type: String,
      required: true,
    },
    model: {
      type: String,
      required: true,
    },
    moneyRepair: {
      type: Number,
      required: true,
    },
    moneyDiagnosis: {
      type: Number,
      required: true,
    },
    moneyPurchase: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    sellPrice: {
      type: Number,
    },
    repairPrice: {
      type: Number,
      default: 0,
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
  },
  { vaersionKey: false, timestamps: true }
);

const joiRepairSchema = Joi.object({
  name: Joi.string().required(),
  numberPhone: Joi.string().required(),
  status: Joi.string().valid("repair", "diagnosis", "purchase").required(),
  statusRepair: Joi.string().valid("start", "finish"),
  finishDay: Joi.string().allow(null),
  brand: Joi.string().required(),
  model: Joi.string().required(),
  description: Joi.string().required(),
  moneyRepair: Joi.number().required(),
  moneyDiagnosis: Joi.number().required(),
  moneyPurchase: Joi.number().required(),
  repairPrice: Joi.number().default(0),
});

const joiStatusRepairSchema = Joi.object({
  statusRepair: Joi.string().valid("start", "finish").required(),
  finishDay: Joi.string().required(),
  sellPrice: Joi.number(),
});

const joiStatusSchema = Joi.object({
  status: Joi.string().valid("repair", "diagnosis", "purchase").required(),
  finishDay: Joi.string().required(),
  sellPrice: Joi.number(),
  statusRepair: Joi.string().valid("start", "finish").required(),
});

const joiTimeSchema = Joi.object({
  finishDay: Joi.string().required(),
});

const joiPriceSchema = Joi.object({
  moneyRepair: Joi.number().min(0),
  moneyDiagnosis: Joi.number().min(0),
  moneyPurchase: Joi.number().min(0),
  description: Joi.string(),
  repairPrice: Joi.number().min(0),
});
const Repair = model("repair", repairSchema);

module.exports = {
  Repair,
  joiRepairSchema,
  joiStatusRepairSchema,
  joiStatusSchema,
  joiTimeSchema,
  joiPriceSchema,
};

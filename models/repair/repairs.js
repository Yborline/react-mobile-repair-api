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
    money: {
      type: Number,
      required: true,
    },
    phonePrice: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
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
  finishDay: Joi.string(),
  brand: Joi.string().required(),
  model: Joi.string().required(),
  description: Joi.string().required(),
  money: Joi.number().required(),
  phonePrice: Joi.number().required(),
});

const joiStatusRepairSchema = Joi.object({
  statusRepair: Joi.string().valid("start", "finish").required(),
});

const joiStatusSchema = Joi.object({
  status: Joi.string().valid("repair", "diagnosis", "purchase").required(),
});

const Repair = model("repair", repairSchema);

module.exports = {
  Repair,
  joiRepairSchema,
  joiStatusRepairSchema,
  joiStatusSchema,
};

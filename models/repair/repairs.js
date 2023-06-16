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
  finishDay: Joi.string().required(),
  brand: Joi.string().required(),
  model: Joi.string().required(),
  description: Joi.string().required(),
  money: Joi.number().required(),
});

const Repair = model("repair", repairSchema);

module.exports = { Repair, joiRepairSchema };

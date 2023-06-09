const { Schema, model, SchemaTypes } = require("mongoose");
const Joi = require("joi");
// const moment = require("moment-timezone");

// const modelSchema = Schema({
//   type: String,
// });

const brandSchema = Schema(
  {
    brand: {
      type: String,
      unique: true,
      required: [true, "name is required"],
    },
    model: [String],
  },
  { versionKey: false, timestamps: true }
);

const joiBrandSchema = Joi.object().keys({
  brand: Joi.string().required(),
  model: Joi.array().required(),
});

const joiModelSchema = Joi.object().keys({
  model: Joi.string().required(),
});

const Brand = model("brand", brandSchema);
module.exports = { Brand, joiBrandSchema, joiModelSchema };

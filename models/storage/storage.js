const { Schema, model } = require("mongoose");
const Joi = require("joi");

const storageSchema = Schema({
  brand: {
    type: String,
    required: true,
  },
  model: {
    type: String,
    required: true,
  },
  spareParts: {
    type: Object,
    boardToBoardPlume: {
      type: Number,
      required: true,
    },
    mainBoard: {
      type: Number,
      required: true,
    },
    subBoard: {
      type: Number,
      required: true,
    },
    antenna: {
      type: Number,
      required: true,
    },

    displayFrame: {
      type: Number,
      required: true,
    },
    lid: {
      type: Number,
      required: true,
    },
    buttonPlume: {
      type: Number,
      required: true,
    },

    frontCamera: {
      type: Number,
      required: true,
    },

    mainCamera: {
      type: Number,
      required: true,
    },
    screen: {
      type: Number,
      required: true,
    },
  },
  owner: {
    type: Schema.Types.ObjectId,
    ref: "user",
    required: true,
  },
});

const joiStorageSchema = Joi.object({
  brand: Joi.string().required(),
  model: Joi.string().required(),
  spareParts: {
    boardToBoardPlume: Joi.number().required(),
    mainBoard: Joi.number().required(),
    subBoard: Joi.number().required(),
    antenna: Joi.number().required(),
    displayFrame: Joi.number().required(),
    lid: Joi.number().required(),
    buttonPlume: Joi.number().required(),
    frontCamera: Joi.number().required(),
    mainCamera: Joi.number().required(),
    screen: Joi.number().required(),
  },
});

const Storage = model("storage", storageSchema);

module.exports = {
  Storage,
  joiStorageSchema,
};

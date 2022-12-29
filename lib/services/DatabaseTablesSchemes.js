const Joi = require("joi");

module.exports = {
  translationScheme: Joi.object().keys({
    id: Joi.number().optional(),
    text_to_translate: Joi.string().required(),
    language_to_translate: Joi.string().required(),
    translation: Joi.string().required(),
  })
};

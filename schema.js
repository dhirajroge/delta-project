const joi = require("joi");

module.exports.listingSchema = joi.object({
    listing : joi.object({
        title: joi.string().required(),
        description: joi.string().required(),
        country: joi.string().required(),
        price: joi.number().required() .min(0),
        image: joi.string().allow("", null),
        location: joi.string().required(),
    }).required()
});

module.exports.reviewSchema = joi.object({
    review: joi.object({
        rating: joi.number().required(),
        Comment: joi.string().required(),
    }).required(),
});
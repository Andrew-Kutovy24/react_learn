import Joi from "joi";

export const carValidator = Joi.object({
    brand: Joi.string().pattern(/^[a-zA-Zа-яА-яёЁіІїЇєЄҐґ]{1,20}$/).required().messages({
        "string.pattern.base":"only word & this must be a least 1"
    }),
    price: Joi.number().min(0).max(1000000).required().messages({
        "number.min":"min price a 0",
        "number.max":"max price a 1000000",
    }),
    year: Joi.number().max(2024).min(1990).required().messages({
        "number.min":"min year is 1990",
        "number.max":"max year is 2024",
    })
})
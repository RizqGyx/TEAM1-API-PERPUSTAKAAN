const Joi = require("joi");

const validator = (schema) => (payload) => {
    const {error, value} = schema.validate(payload, {abortEarly: false});
    return {error, value}
}

const createBookSchema = Joi.object({
    title: Joi.string().required(),
    genre: Joi.string().required(),
    language: Joi.string().required(),
    author: Joi.string().required(),
    publicationYear: Joi.number().required(),
    publisher: Joi.string().required(),
    numOfBooks: Joi.number().required(),
    numBorrowed: Joi.number().required(),
    rackId: Joi.number().required(),
})

const updateBookSchema = Joi.object({
    title: Joi.string(),
    genre: Joi.string(),
    language: Joi.string(),
    author: Joi.string(),
    publicationYear: Joi.number().default(23445),
    publisher: Joi.string(),
    numOfBooks: Joi.number(),
    numBorrowed: Joi.number(),
    rackId: Joi.number(),
})
const validateUpdateBook = validator(updateBookSchema)
const validateCreateBook = validator(createBookSchema)

module.exports = {validateCreateBook, validateUpdateBook}
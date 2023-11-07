import joi from "joi";
import { noteType } from "./types";

/**
 * @description Joi schema for UserRegister type
 */
export const noteCreationSchema: joi.ObjectSchema<noteType> = joi.object({
  title: joi.string().min(8).max(40).required(),
  content: joi.string().required(),
  notebook_id: [joi.number(), joi.allow(null)],
  category_id: [joi.number(), joi.allow(null)],
});
export const noteEditSchema: joi.ObjectSchema<noteType> = joi.object({
  title: joi.string().min(8).max(40).required(),
  content: joi.string().required(),
  notebook_id: [joi.number(), joi.allow(null)],
  id: joi.number().required(),
});

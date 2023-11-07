import joi from "joi";
import { categoryType } from "./types";

/**
 * @description Joi schema for UserRegister type
 */
export const categoryCreationSchema: joi.ObjectSchema<categoryType> =
  joi.object({
    name: joi.string().min(3).max(40).required(),
  });
export const categoryEditSchema: joi.ObjectSchema<categoryType> = joi.object({
  name: joi.string().min(3).max(40).required(),
  id: joi.number().required(),
});

import joi from "joi";
import { notebookType } from "./types";

/**
 * @description Joi schema for UserRegister type
 */
export const notebookCreationSchema: joi.ObjectSchema<notebookType> =
  joi.object({
    name: joi.string().min(3).max(40).required(),
  });
export const notebookEditSchema: joi.ObjectSchema<notebookType> = joi.object({
  name: joi.string().min(3).max(40).required(),
  id: joi.number().required(),
});

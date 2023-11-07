import joi from "joi";
import { trashType } from "./types";

/**
 * @description Joi schema for UserRegister type
 */
export const trashCreationSchema: joi.ObjectSchema<trashType> = joi.object({
  note_id: joi.number().required(),
});
export const trashEditSchema: joi.ObjectSchema<trashType> = joi.object({
  id: joi.number().required(),
  note_id: joi.number().required(),
});

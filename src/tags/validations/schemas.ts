import joi from "joi";
import { tagType } from "./types";

/**
 * @description Joi schema for UserRegister type
 */
export const tagCreationSchema: joi.ObjectSchema<tagType> = joi.object({
  name: joi.string().min(3).max(40).required(),
  user_id: joi.number().optional(),
  note_id: [joi.number(), joi.allow(null)],
});
export const tagEditSchema: joi.ObjectSchema<tagType> = joi.object({
  name: joi.string().min(3).max(40).required(),
  note_id: [joi.number(), joi.allow(null)],
  id: joi.number().required(),
});

import joi from "joi";
import { Registeruser, UserRegister, userLogin } from "./types";

/**
 * @description Joi schema for UserRegister type
 */
export const userRegisterSchema: joi.ObjectSchema<UserRegister> = joi.object({
  username: joi.string().min(4).max(20).alphanum().required(),
  email: joi.string().email().required(),
  password: joi.string().min(6).max(20).required(),
});
/**
 * @description Joi schema for Registeruser type
 */
export const reguserSchema: joi.ObjectSchema<Registeruser> = joi.object({
  user_id: joi.string().min(4).max(20).alphanum().required(),
  email: joi.string().email().required(),
  password: joi.string().min(8).max(20).required(),
  location: joi.string(),
  phone_no: joi.string().min(11).max(12).required(),
  user_name: joi.string().min(11).max(100).required(),
});

/**
 * @description Joi schema for userAdminLogin type
 */
export const userLoginSchema: joi.ObjectSchema<userLogin> = joi.object({
  email: joi.string().email().required(),
  password: joi.string().min(6).max(20).required(),
});

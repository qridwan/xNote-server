"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userLoginSchema = exports.reguserSchema = exports.userRegisterSchema = void 0;
const joi_1 = __importDefault(require("joi"));
/**
 * @description Joi schema for UserRegister type
 */
exports.userRegisterSchema = joi_1.default.object({
    username: joi_1.default.string().min(4).max(20).alphanum().required(),
    email: joi_1.default.string().email().required(),
    password: joi_1.default.string().min(6).max(20).required(),
});
/**
 * @description Joi schema for Registeruser type
 */
exports.reguserSchema = joi_1.default.object({
    user_id: joi_1.default.string().min(4).max(20).alphanum().required(),
    email: joi_1.default.string().email().required(),
    password: joi_1.default.string().min(6).max(20).required(),
    location: joi_1.default.string(),
    phone_no: joi_1.default.string().min(11).max(12).required(),
    user_name: joi_1.default.string().min(11).max(100).required(),
});
/**
 * @description Joi schema for userAdminLogin type
 */
exports.userLoginSchema = joi_1.default.object({
    email: joi_1.default.string().email().required(),
    password: joi_1.default.string().min(6).max(20).required(),
});
//# sourceMappingURL=schemas.js.map
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.categoryEditSchema = exports.categoryCreationSchema = void 0;
const joi_1 = __importDefault(require("joi"));
/**
 * @description Joi schema for UserRegister type
 */
exports.categoryCreationSchema = joi_1.default.object({
    name: joi_1.default.string().min(3).max(40).required(),
});
exports.categoryEditSchema = joi_1.default.object({
    name: joi_1.default.string().min(3).max(40).required(),
    id: joi_1.default.number().required(),
});
//# sourceMappingURL=schemas.js.map
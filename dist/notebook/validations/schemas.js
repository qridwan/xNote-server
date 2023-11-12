"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.notebookEditSchema = exports.notebookCreationSchema = void 0;
const joi_1 = __importDefault(require("joi"));
/**
 * @description Joi schema for UserRegister type
 */
exports.notebookCreationSchema = joi_1.default.object({
    name: joi_1.default.string().min(3).max(40).required(),
    icon: joi_1.default.string().optional(),
});
exports.notebookEditSchema = joi_1.default.object({
    name: joi_1.default.string().min(3).max(40).required(),
    icon: joi_1.default.string().optional(),
    id: joi_1.default.number().required(),
});
//# sourceMappingURL=schemas.js.map
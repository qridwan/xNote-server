"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.noteEditSchema = exports.noteCreationSchema = void 0;
const joi_1 = __importDefault(require("joi"));
/**
 * @description Joi schema for UserRegister type
 */
exports.noteCreationSchema = joi_1.default.object({
    title: joi_1.default.string().min(8).max(40).required(),
    content: joi_1.default.string().required(),
    notebook_id: [joi_1.default.number(), joi_1.default.allow(null)],
    category_id: [joi_1.default.number(), joi_1.default.allow(null)],
});
exports.noteEditSchema = joi_1.default.object({
    title: joi_1.default.string().min(8).max(40).required(),
    content: joi_1.default.string().required(),
    notebook_id: [joi_1.default.number(), joi_1.default.allow(null)],
    id: joi_1.default.number().required(),
});
//# sourceMappingURL=schemas.js.map
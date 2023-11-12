"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.tagEditSchema = exports.tagCreationSchema = void 0;
const joi_1 = __importDefault(require("joi"));
/**
 * @description Joi schema for UserRegister type
 */
exports.tagCreationSchema = joi_1.default.object({
    name: joi_1.default.string().min(3).max(40).required(),
    user_id: joi_1.default.number().optional(),
    note_id: [joi_1.default.number(), joi_1.default.allow(null)],
});
exports.tagEditSchema = joi_1.default.object({
    name: joi_1.default.string().min(3).max(40).required(),
    note_id: [joi_1.default.number(), joi_1.default.allow(null)],
    id: joi_1.default.number().required(),
});
//# sourceMappingURL=schemas.js.map
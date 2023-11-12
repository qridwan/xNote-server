"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.trashEditSchema = exports.trashCreationSchema = void 0;
const joi_1 = __importDefault(require("joi"));
/**
 * @description Joi schema for UserRegister type
 */
exports.trashCreationSchema = joi_1.default.object({
    note_id: joi_1.default.number().required(),
});
exports.trashEditSchema = joi_1.default.object({
    id: joi_1.default.number().required(),
    note_id: joi_1.default.number().required(),
});
//# sourceMappingURL=schemas.js.map
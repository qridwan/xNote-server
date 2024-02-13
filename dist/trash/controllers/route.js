"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = require(".");
const express_1 = __importDefault(require("express"));
const middlewares_1 = require("../../middlewares");
const schemas_1 = require("../validations/schemas");
const trash = express_1.default.Router();
trash.post("/create", middlewares_1.Middlewares.validateSchemas(schemas_1.trashCreationSchema), _1.trashController.createtrash);
trash.patch("/permenent-delete", middlewares_1.Middlewares.validateSchemas(schemas_1.trashEditSchema), _1.trashController.permenentDelete);
trash.delete("/permanent-delete-all", _1.trashController.deleteAllTrash);
trash.get("/", _1.trashController.gettrash);
trash.delete("/:id", _1.trashController.deletetrash);
exports.default = trash;
//# sourceMappingURL=route.js.map
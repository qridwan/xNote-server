"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = require(".");
const express_1 = __importDefault(require("express"));
const middlewares_1 = require("../../middlewares");
const schemas_1 = require("../validations/schemas");
const notebooks = express_1.default.Router();
notebooks.post("/create", middlewares_1.Middlewares.validateSchemas(schemas_1.notebookCreationSchema), _1.notebooksController.createnotebook);
notebooks.patch("/edit", middlewares_1.Middlewares.validateSchemas(schemas_1.notebookEditSchema), _1.notebooksController.editnotebook);
notebooks.get("/", _1.notebooksController.getnotebooks);
notebooks.delete("/:id", _1.notebooksController.deletenotebook);
exports.default = notebooks;
//# sourceMappingURL=route.js.map
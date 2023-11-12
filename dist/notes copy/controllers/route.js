"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = require(".");
const express_1 = __importDefault(require("express"));
const middlewares_1 = require("../../middlewares");
const schemas_1 = require("../validations/schemas");
const notes = express_1.default.Router();
notes.post("/create", middlewares_1.Middlewares.validateSchemas(schemas_1.noteCreationSchema), _1.notesController.createNote);
notes.patch("/edit", middlewares_1.Middlewares.validateSchemas(schemas_1.noteEditSchema), _1.notesController.editNote);
notes.get("/", _1.notesController.getNotes);
notes.delete("/:id", _1.notesController.deleteNote);
exports.default = notes;
//# sourceMappingURL=route.js.map
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = require(".");
const express_1 = __importDefault(require("express"));
const middlewares_1 = require("../../middlewares");
const schemas_1 = require("../validations/schemas");
const tags = express_1.default.Router();
tags.post("/create", middlewares_1.Middlewares.validateSchemas(schemas_1.tagCreationSchema), _1.tagsController.createtag);
tags.patch("/edit", middlewares_1.Middlewares.validateSchemas(schemas_1.tagEditSchema), _1.tagsController.edittag);
tags.get("/", _1.tagsController.gettags);
tags.delete("/:id", _1.tagsController.deletetag);
exports.default = tags;
//# sourceMappingURL=route.js.map